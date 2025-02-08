import { In, LessThanOrEqual } from 'typeorm';
import { AppDataSource } from '../config/typeorm'
import { ApplyJobs } from '../entities/applyJobs.entity';
import { ApplicantStatusJobSeekerProfile } from '../entities/applicantStatusJobSeekerProfile.entity';
import { getEmailTemplate } from './emailTemplate.service';
import { processSaveEmailStagingTables } from './emailStaging.service';
export const saveApplyJob = async (applyJobParams: any, userParams: any) => {

  try {

    let applyJob: any;
    const { id, ...updatedApplyJobParams } = applyJobParams
    const userRepository = AppDataSource.getRepository(ApplyJobs);
    const countApplyJob = await userRepository.createQueryBuilder("applyJobs")
      .where("applyJobs.jobSeekerProfile = :jobSeekerProfile ", { jobSeekerProfile: Number(updatedApplyJobParams.jobSeekerProfile) })
      .andWhere("applyJobs.jobs=:jobs", { jobs: Number(updatedApplyJobParams.jobs) })
      .getCount();

    if (!countApplyJob) {
      const applyJobRepository = AppDataSource.getRepository(ApplyJobs);
      applyJob = await applyJobRepository.save(updatedApplyJobParams);
      const emailTemplateData = await getEmailTemplate('ApplyJob');
      if (emailTemplateData) {

        const emailStagingParams = {
          emailTo: userParams?.email,
          senderUserId: userParams?.id,
          subject: 'New Applicant received for the posted job',
          templateId: emailTemplateData?.id as number,
          templateName: 'ApplyJob',
          applyJob: applyJob?.id,
          jobs: Number(updatedApplyJobParams.jobs),
          user: null,
          mailCompose: null,
          priority: 2
        }
        const emailStagingData = await processSaveEmailStagingTables(emailStagingParams);
      }
      return { count: 0, applyJob: applyJob };
    } else {
      return { count: 1, applyJob: countApplyJob };
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const saveApplicantStatus = async (applicantStatusParams: any) => {

  try {

    let applicantStatus: any;
    const { id, ...updatedApplyJobParams } = applicantStatusParams
    const applicantStatusRepository = AppDataSource.getRepository(ApplicantStatusJobSeekerProfile);
    const countApplicantStatus = await applicantStatusRepository.createQueryBuilder("applicantStatusJobSeekerProfile")
      .where("applicantStatusJobSeeker = :applicantStatusJobSeeker ", { applicantStatusJobSeeker: Number(updatedApplyJobParams.params.applicantStatusJobSeeker) })
      .andWhere("JobId=:JobId", { JobId: Number(updatedApplyJobParams.params.JobId) })
      .getCount();
    if (countApplicantStatus) {
      applicantStatusRepository
        .createQueryBuilder()
        .delete()
        .from(ApplicantStatusJobSeekerProfile)
        .where("applicantStatusJobSeeker = :applicantStatusJobSeeker ", { applicantStatusJobSeeker: Number(updatedApplyJobParams.params.applicantStatusJobSeeker) })
        .andWhere("JobId=:JobId", { JobId: Number(updatedApplyJobParams.params.JobId) })
        .execute().then(async (res) => {
          applicantStatus = await applicantStatusRepository.save(updatedApplyJobParams.params)
          return applicantStatus;
        })
    } else {
      applicantStatus = await applicantStatusRepository.save(updatedApplyJobParams.params)
      return applicantStatus;
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getCountApplicant = async (id: any) => {
  try {
    const userRepository = AppDataSource.getRepository(ApplyJobs);
    const countApplyJob = await userRepository.createQueryBuilder("applyJobs")
      .where("jobs = :jobs ", { jobs: id })
      .getCount();
    return { count: countApplyJob };
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const checkJobForApplicant = async (jobSeekerProfile: any, jobId: any) => {
  try {
    const userRepository = AppDataSource.getRepository(ApplyJobs);
    const countApplyJob = await userRepository.createQueryBuilder("applyJobs")
      .where("jobs = :jobs ", { jobs: jobId })
      .andWhere("jobSeekerProfile = :jobSeekerProfile ", { jobSeekerProfile: jobSeekerProfile })
      .getCount();
    return { count: countApplyJob };
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getApplicantListService = async (data: any) => {

  const page = Number(process.env.JOB_PER_PAGE);
  const skip = (page * data?.page) - page;

  try {
    const applicantRepository = AppDataSource.getRepository(ApplyJobs);
    let applicant = await applicantRepository.find({

      where: {
        jobs: { id: data?.jobId },
        ...((data?.data?.expYear > 1) && { jobs: { totalExpYearEnd: { id: LessThanOrEqual(data?.data?.expYear) } } }),
        ...((data?.data?.department !== undefined && data?.data?.department?.length !== 0) && { jobs: { department: { id: In(data?.data?.department) } } }),
        ...((data?.data?.location !== undefined && data?.data?.location?.length !== 0) && { jobs: { jobsLocation: { location: { id: In(data?.data?.location) } } } }),
        ...((data?.data?.workMode !== undefined && data?.data?.workMode?.length !== 0) && { jobs: { workMode: { id: In(data?.data?.workMode) } } }),
        ...((data?.data?.salary > 1) && { jobs: { payScaleUpperRange: { id: LessThanOrEqual(data?.data?.salary) } } }),
        ...((data?.data?.companyType !== undefined && data?.data?.companyType?.length !== 0) && { jobs: { companyType: { id: In(data?.data?.companyType) } } }),
        ...((data?.data?.roleCategory !== undefined && data?.data?.roleCategory?.length !== 0) && { jobs: { roleCategory: { id: In(data?.data?.roleCategory) } } }),
        ...((data?.data?.keySkills !== undefined && data?.data?.keySkills?.length !== 0) && { jobs: { jobsKeySkills: { keySkills: { id: In(data?.data?.keySkills) } } } }),
      },
      relations: {

        multipleChoiceQuestionnaireAnswer: { multipleChoiceQuestionnaire: true },
        questionnaireAnswer: { questionnaire: { singleSelection: true, multipleSelection: true } },
        jobs: {
          questionnaire: {
            multipleSelection: { multipleChoiceQuestionnaire: { multipleChoiceQuestionnaireAnswer: true } },
            singleSelection: {},
            questionnaireAnswer: { questionnaire: { singleSelection: true, multipleSelection: true } },

          },
          company: true
        },

        jobSeekerProfile: {
          currentLocation: true,
          totalExpMonth: true,
          user: true,
          applicantId: { applicantStatusJobSeeker: true },
          totalExpYear: true,
          noticePeriod: true,
          keySkills: { profileKeySkills: true },
          currentCompany: true,
          currentJobTitle: true,
          personalDetails: {
            language: true
          },
          educations: true,
          careerProfile: {
            industry: true,
            department: true,
            roleCategory: true,
            jobRole: true,
            careerProfileJobType: { jobType: true },
            careerProfileEmployeeType: { employeeType: true },
            jobSeekerProfile: true,
            careerProfilePreferredShift: { preferredShift: true },
            careerProfilePreferredLocations: { location: true },
            currency: true
          },
          employments: {
            jobSeekerProfileEmploymentSkills: {
              keySkills: true
            },
            totalExpMonths: true,
            totalExpYears: true,
            noticePeriod: true,
            joiningDateYear: true,
            joiningDateMonth: true,
            location: true,
            currencyType: true,
            department: true,
          }
        }

      },
      order: {
        id: "DESC",
      },
      skip: (skip),
      take: (page),
    });

    return applicant;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getApplyJobList = async (jobSeekerProfile: any) => {
  try {
    const applyJobsRepository = AppDataSource.getRepository(ApplyJobs);
    let applyJobs = await applyJobsRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        jobSeekerProfile: { id: jobSeekerProfile }
      },
      relations: {
        jobs: {
          company: true,
          totalExpYearEnd: true,
          totalExpYearStart: true,
          payScaleLowerRange: true,
          payScaleUpperRange: true,
          recurrence: true,
          numberSystem: true,
          jobsLocation: { location: true },

        },

        jobSeekerProfile: true,
        multipleChoiceQuestionnaireAnswer: { multipleChoiceQuestionnaire: true },
        questionnaireAnswer: { questionnaire: true },
      }
    });
    return applyJobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const countNoOfApplicantsForJob = async (jobId: string) => {
  try {

    const applyJobRepository = AppDataSource.getRepository(ApplyJobs);
    const result = applyJobRepository.findAndCount({
      where: {

      }
    })

  } catch (error) {
    console.log('Error in countNoOfApplicantsForJob ', error);
  }
}