import { AppDataSource } from "../config/typeorm";
import { ComposeMail } from "../entities/composeMail.entity";
import { ComposeMailJobLocation } from "../entities/composeMailJobLocation.entity";
import { ComposeMailKeySkills } from "../entities/composeMailKeySkills.entity";
import { processSaveEmailStagingTables } from "./emailStaging.service";
import { getEmailTemplate } from "./emailTemplate.service";

const composeMailKeySkillsRepository = AppDataSource.getRepository(ComposeMailKeySkills);
const composeMailJobLocationRepository = AppDataSource.getRepository(ComposeMailJobLocation)

export const saveComposeMail = async (composeMailParams: any, userParams: any) => {

  try {
    const composeMailRepository = AppDataSource.getRepository(ComposeMail);

    const composeMail = await composeMailRepository.save(composeMailParams);

    const emailTemplateData = await getEmailTemplate('RecruiterSendingEmail');
    if (emailTemplateData) {
      const emailStagingParams = {
        emailTo: userParams?.email,
        senderUserId: userParams?.id,
        subject: 'RecruiterSendingEmail',
        templateId: emailTemplateData?.id as number,
        templateName: 'RecruiterSendingEmail',
        applyJob: null,
        jobs: null,
        user: null,
        mailCompose: composeMail?.id,
        priority: 2,
      }
      const emailStagingData = await processSaveEmailStagingTables(emailStagingParams);
    }

    return composeMail;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getOneComposeMail = async (id: number) => {

  try {
    const composeMailRepository = AppDataSource.getRepository(ComposeMail);
    const composeMail = await composeMailRepository.find({
      where: {
        recruiterUser: { id }
      },
      relations: {
        recruiterUser: true,
        applicantUser: { composeJobSeekerProfile: { user: true } },
        mailTemplate: {
          fromWorkExperience: true,
          toWorkExperience: true,
          currency: true,
          minSalaryRange: true,
          maxSalaryRange: true,
          mailTemplateNumberSystem: true
        },
      }
    });
    return composeMail;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}