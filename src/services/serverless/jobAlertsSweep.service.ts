import { Job } from 'node-schedule';
import { AppDataSource } from '../../config/typeorm';
import { JobSeekerProfile } from '../../entities/jobSeekerProfile.entity';
import { Jobs } from '../../entities/jobs.entity';
import { In } from 'typeorm';

export const sweepJobSeekerProfilesWithCursor = async (cursor: number, notificationDuration:string) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const batchSize = Number(process.env.BATCH_SIZE);
    console.log('cursor for jobSeekerProfile ', cursor)
   const queryBuilder= jobSeekerProfileRepository.createQueryBuilder('JobSeekerProfile')
      .addOrderBy('JobSeekerProfile.id')
      .take(batchSize)
      .leftJoinAndSelect('JobSeekerProfile.keySkills', 'keySkill')
      .leftJoinAndSelect('keySkill.profileKeySkills', 'profileKeySkills')
      .leftJoinAndSelect('JobSeekerProfile.user', 'users')
      .leftJoinAndSelect('JobSeekerProfile.notificationPrivacy','notificationPrivacy')
      .leftJoinAndSelect('notificationPrivacy.jobRecommended','jobRecommended')
   
    if (cursor) {
      queryBuilder.where('JobSeekerProfile.id > :cursor', { cursor })
    };
    queryBuilder.andWhere('JobSeekerProfile.isSubscribedForAlerts = :isSubscribedForAlerts', { isSubscribedForAlerts: true });
    queryBuilder.andWhere('jobRecommended.title = :title',{title:notificationDuration});
    return queryBuilder.getMany();
  } catch (error) {
    console.log('error in  sweepJobSeekerProfilesWithCursor ', error);
    throw error;
  }
}

export const fetchJobsForJobSeeker = async (keySkillsIds: number[]) => {
  try {
    const limit = Number(process.env.BATCH_SIZE);
    const jobsRepository = AppDataSource.getRepository(Jobs);
    const jobs = await jobsRepository.find({
      order: {
        id: 'DESC'
      },
      where: {
        jobsKeySkills: {
          keySkills: In(keySkillsIds)
        }
      },
      relations: {
        jobsKeySkills: {
          keySkills: true
        },
        company: true,
        jobsLocation: {
          location: true
        },
        workMode: true,
        employmentType:true
      },
      take: limit
    });
    return jobs;
  } catch (error) {
    console.log('error in fetchJobsForJobSeeker ', error);
  }
}