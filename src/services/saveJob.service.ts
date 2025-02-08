import { AppDataSource } from '../config/typeorm'
import { SaveJob } from '../entities/saveJob.entity';
export const saveJob = async (saveJobParams: any) => {

  try {
    let saveJob: any;
    const userRepository = AppDataSource.getRepository(SaveJob);
    const countSaveJob = await userRepository.createQueryBuilder("saveJobs")
      .where("saveJobs.jobSeekerProfile = :jobSeekerProfile ", { jobSeekerProfile: Number(saveJobParams.params.jobSeekerProfile) })
      .andWhere("saveJobs.jobs=:jobs", { jobs: Number(saveJobParams.params.jobs) })
      .getCount();

    if (!countSaveJob) {
      const saveJobRepository = AppDataSource.getRepository(SaveJob);
      saveJob = await saveJobRepository.save(saveJobParams.params)
      return { count: 0, saveJob: saveJob };
    } else {
      return { count: 1, saveJob: countSaveJob };
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const deleteJob = async (jobs: any, jobSeekerProfile: any) => {
  try {
    const saveJobRepository = AppDataSource.getRepository(SaveJob);
    const deleteJob = await saveJobRepository.createQueryBuilder("SaveJob")
      .delete()
      .where("jobs = :jobs ", { jobs: jobs })
      .andWhere("jobSeekerProfile = :jobSeekerProfile ", { jobSeekerProfile: jobSeekerProfile })
      .execute()
    return deleteJob;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getSaveJobList = async (jobSeekerProfile: any) => {
  try {
    const saveJobsRepository = AppDataSource.getRepository(SaveJob);
    let saveJobs = await saveJobsRepository.find({
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

        jobSeekerProfile: { user: true },
      }
    });
    return saveJobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const checkApplicantToSave = async (jobSeekerProfile: any, jobId: any) => {
  try {
    const saveJobRepository = AppDataSource.getRepository(SaveJob);
    const countSaveJob = await saveJobRepository.createQueryBuilder("saveJob")
      .where("jobs = :jobs ", { jobs: jobId })
      .andWhere("jobSeekerProfile = :jobSeekerProfile ", { jobSeekerProfile: jobSeekerProfile })
      .getCount();
    return { count: countSaveJob };
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
