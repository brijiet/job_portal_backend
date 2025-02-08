import { storageResume, fileFilterDocument } from '../config/multer';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import { promisify } from 'util';
import { loginCheckUser, fetchUser, saveUser, getUser, sendResetToken, updateNewPassword, updateEmailAddress, updateMobileNumber, updateNewUserPassword } from '../services/user.service';
import { getJobSeekerProfile, saveJobSeekerProfile } from '../services/jobSeekerProfile.service';
import { generateToken } from '../utils/generateToken';
import { User } from '../entities/user.entity';
import { SaveOptions, RemoveOptions } from 'typeorm';
import 'dotenv/config';
import { getEmailTemplate } from '../services/emailTemplate.service';
import { processSaveEmailStagingTables, saveEmailStaging } from '../services/emailStaging.service';
import { fetchEmailStagingStatus } from '../services/emailStagingStatus.service';
import { employerCompanyList } from '../services/employer/companies.service';

interface OutParams extends User {
  jobSeekProfileId?: number,
  recruiterProfileId?: number
}

export const registerUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { workStatus, ...userParams } = req.body;
    const jobSeekerType = workStatus ? 'Experienced' : 'Fresher';

    const userData = await fetchUser(userParams.email);
    if (userData) {
      return res.status(400).json({
        message: 'Email already exists'
      })
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userParams.password, saltRounds).then(function (hash) { return hash });
    userParams.hashedPassword = hashedPassword;
    delete userParams.password;

    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }
    let upload = await promisify(multer({
      storage: storageResume,
      fileFilter: fileFilterDocument,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    let resumePath;
    if (!req.file) {
      resumePath = 'no path';
    } else {
      resumePath = req.file.path;
    };

    const fileName = req.file?.filename
    const user = await saveUser(userParams);
    // const emailTemplateData = await getEmailTemplate('emailVerify');
    // if (emailTemplateData) {
    //   const emailStagingStatusData = await fetchEmailStagingStatus('pending');
    //   if (emailStagingStatusData) {
    //     const stagingTemplateParams = {
    //       emailTo: user.email,
    //       subject: "Email Verification",
    //       template: emailTemplateData?.id,
    //       emailStagingStatus:emailStagingStatusData?.id
    //     };
    //     await saveEmailStaging(stagingTemplateParams as any)

    //   } 
    // }
    const emailTemplateData = await getEmailTemplate('emailVerify');
    if (emailTemplateData) {
      const emailStagingParams = {
        emailTo: userParams.email,
        senderUserId: null,
        subject: 'Email Verification',
        templateId: emailTemplateData?.id,
        templateName: 'emailVerify',
        jobs: null,
        applyJob: null,
        user: user.id,
        mailCompose: null,
        priority: 1
      }
      // const emailStagingData = await processSaveEmailStagingTables(emailStagingParams);
    }
    const OutPutData: OutParams = {
      ...user,
      hasId: function (): boolean {
        throw new Error('Function not implemented.');
      },
      save: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      remove: function (options?: RemoveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      softRemove: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      recover: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      reload: function (): Promise<void> {
        throw new Error('Function not implemented.');
      }
    }
    switch (user.userType) {
      case 'jobSeeker': {

        const jobSeekerParams = {
          userId: user.id,
          jobSeekerType,
          id: user.id,
          resumePath: resumePath,
          resumeFile: fileName,
          user: {
            id: user.id
          }
        }
        await saveJobSeekerProfile(jobSeekerParams);
        OutPutData.jobSeekProfileId = user.id
      }
    }
    const token = await generateToken(user);
    res.cookie('token', token);
    return res.status(201).json({
      message: 'User successfully saved',
      data: OutPutData,
      token: token
    });

  } catch (error) {
    console.log('error', error);
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'File size larger then 2MB'
        })
      }
    } else {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message
        });
      } else {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
    }
  }
}

export const signInUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { ...userParams } = req.body;
    const userData = await loginCheckUser(userParams.email);
    if (userData) {
      const passwordMatch = await bcrypt.compare(userParams.password, `${userData.hashedPassword}`);

      if (passwordMatch) {
        const token = await generateToken(userData);
        res.cookie('token', token);

        return res.status(201).json({
          message: 'valid user',
          data: userData,
          token: token
        });
      } else {
        return res.status(500).json({
          message: 'Invalid user',

        });
      }
    } else {
      return res.status(500).json({
        message: 'Invalid user',
      });
    }
  } catch (error) {
    console.log('error', error);
  }
}

export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await sendResetToken(req?.body?.data);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: 'Internal server error'
    })
  };
}

export const updatePassword: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, resetToken } = req?.user;
    const { password } = req?.body;
    const result = await updateNewPassword(email, resetToken, password);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const changeUserPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.user;
    const password = req?.body?.newPassword;
    const result = await updateNewUserPassword(id, password);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const getUserDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    return res.status(200).json({
      data: req.user
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const getApplicants: RequestHandler = async (req: Request, res: Response) => {
  try {
    const users = await getUser('jobSeeker');
    const usersWithProfiles = await Promise.all(users.map(async (user: any) => {
      const jobseeker = await getJobSeekerProfile(user.id);
      const result = await employerCompanyList(req.query);
      let totalskills = 0;
      let matchingskills = 0;
      result.forEach((company: any) => {
        const allJobs = company?.jobs.filter((jobskill: any) => jobskill.jobStatus?.title === 'Open').map((joblist: any) => joblist.jobsKeySkills.map((skill: any) => skill.keySkills)).flat();
        let uniqueJobs = Array.from(new Set(allJobs.map((job: any) => JSON.stringify(job)))).map((job: any) => JSON.parse(job));
        totalskills += uniqueJobs.length;
        if (jobseeker?.keySkills?.some((keySkill: any) => {
          return uniqueJobs.some((applicant: any) => applicant?.id === keySkill?.profileKeySkills?.id);
        })) {
          matchingskills++;
        }
      });
      let percentage = (matchingskills / totalskills) * 100;
      percentage = percentage === Infinity ? 0 : percentage;
      return { ...user, profile: jobseeker, indicator: percentage };
    }));

    return res.status(200).json({
      data: usersWithProfiles
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const updateEmailAddressController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req?.user?.id
    const emailParams = {
      isEmailVerified: req?.body?.isEmailVerified,
      email: req?.body?.email
    }
    const result = await updateEmailAddress(id, emailParams);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const updateMobileNumberController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req?.user?.id
    const mobileNumberParams = {
      isMobileVerified: req?.body?.isMobileVerified,
      mobileNumber: req?.body?.mobileNumber
    }
    const result = await updateMobileNumber(id, mobileNumberParams);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

