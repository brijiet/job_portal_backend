import { AppDataSource } from '../config/typeorm';
import { ApplyJobs } from '../entities/applyJobs.entity';
import { CommunicationsMaster } from '../entities/communicationsMaster.entity';
import { Messages } from '../entities/messages.entity';
const communicationsMasterRepository = AppDataSource.getRepository(CommunicationsMaster);
const communicationsMessageRepository = AppDataSource.getRepository(Messages);

export const saveCommunicationMaster = async (communicationParams: any) => {
  try {
    const data = await communicationsMasterRepository.save(communicationParams);
    return data;

  } catch (error) {
    console.log('error in saveCommunicationMaster ', error);
  }
}

export const saveCommunicationMessage = async (messageParams: any) => {
  try {
    const data = await communicationsMessageRepository.save(messageParams);
    return data;

  } catch (error) {
    console.log('error in saveCommunicationMaster ', error);
  }
}

export const jobSeekerToRecruiterCommunication = async (userId: any, userType: string) => {
  try {
    if (String(userType) === 'jobSeeker') {
      const dataSet = await communicationsMasterRepository.find({
        where: {
          jobSeekerUser: { id: userId }
        },
        relations: {
          messages: { messagesAttachment: true },
          recruiterUser: { recruiterCommunications: true, companies: true },
          jobsCommunication: { jobs: true }
        },
        order: { messages: { createdDate: "desc" } }
      });
      return dataSet;
    } else if (String(userType) === 'employer') {
      const dataSet = await communicationsMasterRepository.find({
        where: {
          recruiterUser: { id: userId }
        },
        relations: {
          messages: { messagesAttachment: true },
          jobsCommunication: { user: true, jobs: true },
          jobSeekerUser: { jobSeekerProfile: true }

        },
        order: { messages: { createdDate: "desc" } }
      });
      return dataSet;
    }
  } catch (error) {
    console.log('error in saveCommunicationMaster ', error);
  }
}

export const applyDateForMessaging = async (jobSeekerProfileId: number, jobId: number) => {
  try {
    const queryResult = AppDataSource.getRepository(ApplyJobs)
      .createQueryBuilder("applyJobs").select("applyJobs")
      .where("applyJobs.jobSeekerProfile = :jobSeekerProfile", { jobSeekerProfile: jobSeekerProfileId })
      .andWhere("applyJobs.jobs = :jobs", { jobs: jobId })

      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const updateIsReadStatus = async (communicationsId: string, receiverId: string) => {
  try {
    const queryResult = AppDataSource
      .getRepository(Messages)
      .createQueryBuilder("messages")
      .update(Messages)
      .set({ isRead: 0 })
      .where("messages.communicationsId = :communicationsId", { communicationsId: communicationsId })
      .andWhere("messages.receiverId = :receiverId", { receiverId: receiverId })
      .execute();

    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
