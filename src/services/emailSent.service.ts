import { AppDataSource } from '../config/typeorm';
import { EmailSent } from '../entities/emailSent.entity';

export const saveEmailSent = async (emailSentParams: EmailSent) => {
  try {

    const emailSentRepository = AppDataSource.getRepository(EmailSent);
    return await emailSentRepository.save(emailSentParams);

  } catch (error) {
    console.log('Error in store of saveEmailSent ', error);
    throw error;
  }
}

export const fetchEmailSent = async (id: number) => {
  try {

    const emailSentRepository = AppDataSource.getRepository(EmailSent);
    const emailSent = await emailSentRepository.findOne({ where: { id } })
    return emailSent;
  } catch (error) {
    console.log('error in fetchEmailSent', error);
    throw error;
  }
}
