import { AppDataSource } from '../config/typeorm';
import { BlockedCompanies } from '../entities/blockedCompanies.entity';
import { EmailNotificationPrivacy } from '../entities/emailNotificationPrivacy.entity';
import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';

const blockCompaniesRepository = AppDataSource.getRepository(BlockedCompanies);
const emailNotificationRepository = AppDataSource.getRepository(EmailNotificationPrivacy);
const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);


export const saveBlockCompanies = async (blockedParams: any) => {
  try {
    const data = await blockCompaniesRepository.save(blockedParams);
    return data;
  } catch (error) {
    console.log('error in save blocked companies ', error);
  }
}

export const getBlockCompanies = async (userId: number) => {
  try {
    const dataSet = await blockCompaniesRepository.find({
      where: {
        jobSeeker: { id: userId }
      },
      relations: {
        company: true,
      },
    });
    return dataSet;

  } catch (error) {
    console.log('error in get blocked companies ', error);
  }
}

export const deleteBlockCompanies = async (companyId: number) => {
  try {
    const data = await blockCompaniesRepository.createQueryBuilder()
      .delete()
      .from(BlockedCompanies)
      .where("id = :id", { id: companyId })
      .execute();
    return data;

  } catch (error) {
    console.log('error in delete blocked companies ', error);
  }
}

export const blockApplicant = async (companyId: number) => {
  try {
    const dataSet = await blockCompaniesRepository.find({
      where: {
        company: { id: companyId }
      },
      relations: {
        jobSeeker: true
      }
    });
    return dataSet;

  } catch (error) {
    console.log('error in delete blocked companies ', error);
  }
}

export const emailNotification = async (notificationParams: EmailNotificationPrivacy) => {

  try {
    const { notificationPrivacy, privacy } = notificationParams
    if (privacy === 'NotLooking') {
      await jobSeekerProfileRepository.update({ id: Number(notificationPrivacy) }, { isSubscribedForAlerts: false });
    }
    if (privacy === 'Immediately') {
      await jobSeekerProfileRepository.update({ id: Number(notificationPrivacy) }, { isSubscribedForAlerts: true });
    }
    emailNotificationRepository
      .createQueryBuilder("emailNotificationPrivacy")
      .select("emailNotificationPrivacy")
      .where("emailNotificationPrivacy.notificationPrivacy = :notificationPrivacy", { notificationPrivacy: notificationParams.notificationPrivacy })
      .getOne().then(res => {
        if (res?.id) {
          emailNotificationRepository
            .createQueryBuilder("emailNotificationPrivacy")
            .delete()
            .where("notificationPrivacy = :notificationPrivacy", { notificationPrivacy: notificationParams.notificationPrivacy })
            .execute().then((res) => {
              const notification = emailNotificationRepository.save(notificationParams);
              return notification;
            })
        } else {
          const notification = emailNotificationRepository.save(notificationParams);
          return notification;
        }

      });
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const updateEmailAndMobileNotification = async (notificationPrivacy: any, notificationParams: any) => {
  try {
    const notifyRepository = AppDataSource.getRepository(EmailNotificationPrivacy);
    const notify = await notifyRepository.update({ notificationPrivacy }, notificationParams);
    return notify;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getEmailNotification = async (userId: number) => {
  try {
    const dataSet = await emailNotificationRepository.find({
      where: {
        notificationPrivacy: { id: userId }
      },
      relations: {
        jobAlert: true,
        jobRecommended: true
      }
    });
    return dataSet;
  } catch (error) {
    console.log('error in get blocked companies ', error);
  }
}