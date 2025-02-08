import { EmailTemplate } from "../entities/emailTemplate.entity";
import { AppDataSource } from "../config/typeorm";

export const emailTemplateList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(EmailTemplate)
      .createQueryBuilder("EmailTemplate").select("EmailTemplate")
      .where("EmailTemplate.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getEmailTemplate = async (template: string) => {
  try {
    const emailTemplateRepository = AppDataSource.getRepository(EmailTemplate);
    const data = await emailTemplateRepository.findOne({
      where: { title: template }
    }
    );
    return data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
