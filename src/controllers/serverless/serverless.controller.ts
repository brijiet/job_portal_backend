import { Request, RequestHandler, Response } from 'express';
import { fetchEmailStagingById, fetchEmailTemplatesWithCursor, } from '../../services/serverless/emailVerifySweep.service';
import { fetchUser, updateUser } from '../../services/user.service';
import { generateToken } from '../../utils/generateToken';
import { fetchJobsForJobSeeker, sweepJobSeekerProfilesWithCursor } from '../../services/serverless/jobAlertsSweep.service';
import { saveEmailSent } from '../../services/emailSent.service';
import { updateEmailStaging } from '../../services/emailStaging.service';
import { fetchEmailStagingStatus } from '../../services/emailStagingStatus.service';
import { getJobSeekerProfileForServerless } from '../../services/jobSeekerProfile.service';
import { verifyJwtToken } from '../../utils/verifyJwtToken';
import { saveCommunicationMaster } from '../../services/communicationsMaster.service';

export const sweepEmailTemplates: RequestHandler = async (req: Request, res: Response) => {
  try {
    const cursor = req.params.cursor;

    const result = await fetchEmailTemplatesWithCursor(parseInt(cursor));
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const getEmailStagingById: RequestHandler = async (req: Request, res: Response) => {
  try {
    // const id = req.body.message.emailStagingId;
    const { emailStagingId } = req.body;
    const result = await fetchEmailStagingById(emailStagingId);
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const generateTokenForServerless = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log('email for serverless ', req.body.email)
    const user = await fetchUser(email);
    if (user) {
      const token = await generateToken(user);
      if (token) {
        return res.status(200).json({
          token: token
        });
      } else {
        return res.status(404).json({
          token: null
        });
      }
    } else {
      return res.status(404).json({
        token: null
      });
    }

  } catch (error) {
    console.log('error in generation of token ', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
};


export const updateUserForServerless = async (req: Request, res: Response) => {
  try {
    const { email, emailVerifyLink } = req.body;
    const userParams = {
      emailVerifyLink
    };
    console.log('email ', email, userParams)
    const user = await updateUser(email, userParams);
    return res.status(200).json({
      message: 'User updated successfully'
    });
  } catch (error) {
    console.log('error in the update user of serverless', error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
}

export const sweepJobSeekerForJobAlerts = async (req: Request, res: Response) => {
  try {

    const cursor = Number(req.params.cursor);
    const notificationDuration = req.params.notificationDuration;
    const jobSeeker = await sweepJobSeekerProfilesWithCursor(cursor, notificationDuration);
    return res.status(200).json({
      data: jobSeeker
    });

  } catch (error) {
    console.log('error in sweepJobSeekerForJobAlerts', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}


export const getJobsForJobSeeker = async (req: Request, res: Response) => {
  try {

    const keySkillsIds = req.body.keySkillsIds;
    const jobSeeker = await fetchJobsForJobSeeker(keySkillsIds)
    return res.status(200).json({
      data: jobSeeker
    });

  } catch (error) {
    console.log('error in sweepJobSeekerForJobAlerts', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const storeEmailSent = async (req: Request, res: Response) => {
  try {

    const { emailStaging, emailBody } = req.body;

    const emailSentParams = {
      emailStaging: emailStaging,
      emailBody: emailBody
    };

    const emailSent = await saveEmailSent(emailSentParams as any);
    return res.status(200).json({
      message: 'Successfully stored emailSent'
    });

  } catch (error) {
    console.log('error in storeEmailSent ', error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
}

export const updateEmailStagingForServerless = async (req: Request, res: Response) => {
  try {
    const { id, emailStagingStatus } = req.body;
    const emailStagingStatusData = await fetchEmailStagingStatus(emailStagingStatus)
    if (emailStagingStatusData?.id) {
      const emailStagingParams = {
        emailStagingStatus: emailStagingStatusData?.id
      };
      console.log('id ', id, emailStagingParams)
      const emailStaging = await updateEmailStaging(id, emailStagingParams as any);
      return res.status(200).json({
        message: 'EmailStaging updated successfully'
      });
    } else {
      return res.status(404).json({
        message: 'EmailStaging not found'
      });
    }
  } catch (error) {
    console.log('error in the update user of serverless', error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
}

export const fetchJobsForJobSeekerForServerless = async (req: Request, res: Response) => {
  try {
    const jobKeySkills = req.body.jobKeySkills;
    console.log('jobKeySkills ', jobKeySkills)
    const jobSeekerData = await getJobSeekerProfileForServerless(jobKeySkills);
    console.log('jobSeeker data ', JSON.stringify(jobSeekerData));
    return res.status(200).json({
      data: jobSeekerData
    });

  } catch (error) {
    console.log('error in fetchJobsForJobSeekerForServerless', error)
  }
}

export const serverLessAllApplicantList = async (req: Request, res: Response) => {
  try {

    const token = req.params.token;
    const jobId = req.params.jobId;
    const decoded: any = await verifyJwtToken(token);
    const userData = await fetchUser(decoded.email)
    if (userData) {
      const token = await generateToken(userData);
      res.cookie('token', token);
      const reactServer = process.env.REACT_SERVER_URL;
      res.redirect(`${reactServer}recruiterInbox/${jobId}`);
    } else {
      return res.status(400).json({
        message: 'User not present'
      });
    };

  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message
    });
  }
}

export const saveCommunicationsFromServerless = async (req: Request, res: Response) => {
  try {

    const communicationParams = req.body;

    // console.log('communications body', req.body);
    const communications = await saveCommunicationMaster(communicationParams);

    // console.log('communications after save ', JSON.stringify(communications))

    return res.status(200).json({
      message: 'Communications data successfully saved'
    })
  } catch (error) {
    console.log('error in saveCommunicationsFromServerless', error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
}