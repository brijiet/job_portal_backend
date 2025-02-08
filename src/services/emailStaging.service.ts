import { serviceBusClient } from '../config/azureConfig';
import { AppDataSource } from '../config/typeorm';
import { EmailStaging } from '../entities/emailStaging.entity';
import { fetchEmailStagingStatus } from './emailStagingStatus.service';
import { fetchObjectNameByJobId, fetchObjectNameBymailComposeId, saveObjectName } from './objectName.service';
import { fetchObjectNameType } from './objectNameType.service';
import 'dotenv/config';

type SaveEmailStagingParams = {
  emailTo: string,
  subject: string,
  templateId: number,
  templateName: string,
  jobs: number | null,
  applyJob: number | null,
  user: number | null,
  senderUserId: number | null,
  mailCompose: number | null,
  priority: number
}

export const saveEmailStaging = async (emailStagingParams: EmailStaging) => {
  try {

    const emailStagingRepository = AppDataSource.getRepository(EmailStaging);
    return await emailStagingRepository.save(emailStagingParams);

  } catch (error) {
    console.log('Error in store of StagingEmailTemplates ', error);
    throw error;
  }
}

export const processSaveEmailStagingTables = async (params: SaveEmailStagingParams) => {
  try {

    const objectNameType = await fetchObjectNameType(params.templateName);

    if (objectNameType) {
      const objectNameParams = {
        objectNameType: objectNameType?.id,
        jobs: params.jobs,
        applyJob: params.applyJob,
        user: params.user,
        composeMail: params.mailCompose
      };
      const objectNameData = await saveObjectName(objectNameParams as any);
      if (objectNameData?.id) {
        const emailStagingStatusData = await fetchEmailStagingStatus('pending');
        if (emailStagingStatusData) {
          const emailStagingParams = {
            emailTo: params.emailTo,
            subject: params.subject,
            template: params.templateId,
            objectName: objectNameData?.id,
            emailStagingStatus: emailStagingStatusData?.id,
            senderUserId: params.senderUserId,
            priority: params.priority
          };

          const emailStaging = await saveEmailStaging(emailStagingParams as any)
          console.log('email staging ', emailStaging);

          if (params.priority === 1) {
            const azureMessageQueue = process.env.AZURE_QUEUE_NAME as string
            const sender = serviceBusClient.createSender(azureMessageQueue);
            await sender.sendMessages({
              body: JSON.stringify({ emailStagingId: emailStaging.id }),
              contentType: 'application/json'
            });
          }
          return emailStaging;
        }
      }
    }

  } catch (error) {
    console.log('processSaveEmailStagingTables ', error);
    throw error;
  }
}

export const updateEmailStaging = async (id: number, emailStagingParams: EmailStaging) => {
  try {

    const emailStagingRepository = AppDataSource.getRepository(EmailStaging);
    return await emailStagingRepository.update({ id }, emailStagingParams);

  } catch (error) {
    console.log('Error in store of StagingEmailTemplates ', error);
    throw error;
  }
}
