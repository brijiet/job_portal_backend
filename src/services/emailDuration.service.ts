import { AppDataSource } from "../config/typeorm";
import { EmailDuration } from '../entities/emailDuration.entity';

export const emailDurationList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(EmailDuration)
      .createQueryBuilder("emailDuration").select("emailDuration")
      .where("emailDuration.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
