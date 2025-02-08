import { AppDataSource } from '../config/typeorm';
import { EmailStagingStatus } from '../entities/emailStagingStatus.entity'; 

export const fetchEmailStagingStatus = async (title:string) => {
  try {

    const emailStagingStatusRepository = AppDataSource.getRepository(EmailStagingStatus);
    return await emailStagingStatusRepository.findOne({
      where: {
        title
      }
    })

  } catch (error) {
    console.log('Error in store of StagingEmailTemplates ', error);
    throw error;
  }
}