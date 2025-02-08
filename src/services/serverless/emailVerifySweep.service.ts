import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../config/typeorm';
import { EmailStaging } from '../../entities/emailStaging.entity';

export const fetchEmailTemplatesWithCursor = async (cursor: number) => {
  try {
    console.log('fetch called cursor value', cursor);
    const batchSize = parseInt(process.env.BATCH_SIZE as string);
    const stagingTemplatesRepository = AppDataSource.getRepository(EmailStaging);
    const queryBuilder = await stagingTemplatesRepository.createQueryBuilder('EmailStaging')
      .orderBy('EmailStaging.id')
      .take(batchSize)
      .leftJoinAndSelect('EmailStaging.template', 'template')
      .leftJoinAndSelect('EmailStaging.emailStagingStatus', 'emailStagingStatus')
      .leftJoinAndSelect('EmailStaging.objectName', 'objectName')
      .leftJoinAndSelect('objectName.jobs', 'jobs')
      .leftJoinAndSelect('jobs.jobsKeySkills', 'jobsKeySkills')
      .leftJoinAndSelect('jobsKeySkills.keySkills', 'keySkills')
      .leftJoinAndSelect('jobs.jobsLocation', 'jobsLocation')
      .leftJoinAndSelect('jobsLocation.location', 'location')
      .leftJoinAndSelect('jobs.payScaleUpperRange', 'payScaleUpperRange')
      .leftJoinAndSelect('jobs.payScaleLowerRange', 'payScaleLowerRange')
      .leftJoinAndSelect('jobs.numberSystem', 'numberSystem')
      .leftJoinAndSelect('jobs.totalExpYearStart', 'totalExpYearStart')
      .leftJoinAndSelect('jobs.totalExpYearEnd', 'totalExpYearEnd')
      .leftJoinAndSelect('jobs.user', 'user')
      .leftJoinAndSelect('objectName.applyJob', 'applyJob')
      .leftJoinAndSelect('objectName.user', 'objectUser')
      .leftJoinAndSelect('applyJob.jobSeekerProfile', 'jobSeekerProfile')
      .leftJoinAndSelect('jobSeekerProfile.currentLocation', 'currentLocation')
      .leftJoinAndSelect('jobSeekerProfile.totalExpYear', 'totalExpYear')
      .leftJoinAndSelect('jobSeekerProfile.totalExpMonth', 'totalExpMonth')
      .leftJoinAndSelect('jobSeekerProfile.noticePeriod', 'noticePeriod')
      .leftJoinAndSelect('jobSeekerProfile.currentJobTitle', 'currentJobTitle')
      .leftJoinAndSelect('jobSeekerProfile.keySkills', 'jobSeekerKeySkills')
      .leftJoinAndSelect('jobSeekerKeySkills.profileKeySkills', 'profileKeySkills')
      .leftJoinAndSelect('jobSeekerProfile.educations', 'educations')
      .leftJoinAndSelect('jobSeekerProfile.user', 'jobSeekerUser')
      .leftJoinAndSelect('jobSeekerProfile.careerProfile', 'careerProfile')
      .leftJoinAndSelect('careerProfile.careerProfilePreferredLocations', 'careerProfilePreferredLocations')
      .leftJoinAndSelect('careerProfilePreferredLocations.location', 'careerLocation')
      .leftJoinAndSelect('jobSeekerProfile.currentCompany', 'currentCompany')
      .leftJoinAndSelect('objectName.composeMail', 'composeMail')
      .leftJoinAndSelect('composeMail.mailTemplate', 'mailTemplate')
      .leftJoinAndSelect('composeMail.applicantUser','applicantUser')
      .leftJoinAndSelect('applicantUser.composeJobSeekerProfile','composeJobSeekerProfile')
      .leftJoinAndSelect('composeJobSeekerProfile.user','mailUser')
      .leftJoinAndSelect('mailTemplate.fromWorkExperience', 'fromWorkExperience')
      .leftJoinAndSelect('mailTemplate.toWorkExperience', 'toWorkExperience')
      .leftJoinAndSelect('mailTemplate.currency', 'currency')
      .leftJoinAndSelect('mailTemplate.minSalaryRange', 'minSalaryRange')
      .leftJoinAndSelect('mailTemplate.maxSalaryRange', 'maxSalaryRange')
      .leftJoinAndSelect('mailTemplate.mailTemplateJobLocation', 'mailTemplateJobLocation')
      .leftJoinAndSelect('mailTemplate.mailTemplateKeySkills', 'mailTemplateKeySkills')
      .leftJoinAndSelect('mailTemplateKeySkills.keySkills', 'mailKeySkills')
      .leftJoinAndSelect('mailTemplateJobLocation.templateLocation', 'templateLocation')

    if (cursor) {
      queryBuilder.where('EmailStaging.id > :cursor', { cursor });
    };
    queryBuilder.andWhere('emailStagingStatus.title = :title', { title: 'pending' })
    queryBuilder.andWhere('EmailStaging.priority = :priority', { priority: 2 });

    return await queryBuilder.getMany();
  } catch (error) {
    console.log('error in fetch of staging templates', error);
    throw error;
  }
};


export const fetchEmailStagingById = async (id: number) => {
  try {
    console.log('fetch called id value', id);
    // const batchSize = parseInt(process.env.BATCH_SIZE as string);
    const stagingTemplatesRepository = AppDataSource.getRepository(EmailStaging);
    const queryBuilder = await stagingTemplatesRepository.createQueryBuilder('EmailStaging')

      .leftJoinAndSelect('EmailStaging.template', 'template')
      .leftJoinAndSelect('EmailStaging.emailStagingStatus', 'emailStagingStatus')
      .leftJoinAndSelect('EmailStaging.objectName', 'objectName')
      .leftJoinAndSelect('objectName.jobs', 'jobs')
      .leftJoinAndSelect('jobs.jobsKeySkills', 'jobsKeySkills')
      .leftJoinAndSelect('jobsKeySkills.keySkills', 'keySkills')
      .leftJoinAndSelect('jobs.jobsLocation', 'jobsLocation')
      .leftJoinAndSelect('jobsLocation.location', 'location')
      .leftJoinAndSelect('jobs.payScaleUpperRange', 'payScaleUpperRange')
      .leftJoinAndSelect('jobs.payScaleLowerRange', 'payScaleLowerRange')
      .leftJoinAndSelect('jobs.numberSystem', 'numberSystem')
      .leftJoinAndSelect('jobs.totalExpYearStart', 'totalExpYearStart')
      .leftJoinAndSelect('jobs.totalExpYearEnd', 'totalExpYearEnd')
      .leftJoinAndSelect('jobs.user', 'user')
      .leftJoinAndSelect('objectName.applyJob', 'applyJob')
      .leftJoinAndSelect('objectName.user', 'objectUser')
      .leftJoinAndSelect('applyJob.jobSeekerProfile', 'jobSeekerProfile')
      .leftJoinAndSelect('jobSeekerProfile.currentLocation', 'currentLocation')
      .leftJoinAndSelect('jobSeekerProfile.totalExpYear', 'totalExpYear')
      .leftJoinAndSelect('jobSeekerProfile.totalExpMonth', 'totalExpMonth')
      .leftJoinAndSelect('jobSeekerProfile.noticePeriod', 'noticePeriod')
      .leftJoinAndSelect('jobSeekerProfile.currentJobTitle', 'currentJobTitle')
      .leftJoinAndSelect('jobSeekerProfile.keySkills', 'jobSeekerKeySkills')
      .leftJoinAndSelect('jobSeekerKeySkills.profileKeySkills', 'profileKeySkills')
      .leftJoinAndSelect('jobSeekerProfile.educations', 'educations')
      .leftJoinAndSelect('jobSeekerProfile.user', 'jobSeekerUser')
      .leftJoinAndSelect('jobSeekerProfile.careerProfile', 'careerProfile')
      .leftJoinAndSelect('careerProfile.careerProfilePreferredLocations', 'careerProfilePreferredLocations')
      .leftJoinAndSelect('careerProfilePreferredLocations.location', 'careerLocation')
      .leftJoinAndSelect('jobSeekerProfile.currentCompany', 'currentCompany')
      .leftJoinAndSelect('objectName.composeMail', 'composeMail')
      .leftJoinAndSelect('composeMail.mailTemplate', 'mailTemplate')
      .leftJoinAndSelect('composeMail.applicantUser','applicantUser')
      .leftJoinAndSelect('applicantUser.composeJobSeekerProfile','composeJobSeekerProfile')
      .leftJoinAndSelect('composeJobSeekerProfile.user','mailUser')
      .leftJoinAndSelect('mailTemplate.fromWorkExperience', 'fromWorkExperience')
      .leftJoinAndSelect('mailTemplate.toWorkExperience', 'toWorkExperience')
      .leftJoinAndSelect('mailTemplate.currency', 'currency')
      .leftJoinAndSelect('mailTemplate.minSalaryRange', 'minSalaryRange')
      .leftJoinAndSelect('mailTemplate.maxSalaryRange', 'maxSalaryRange')
      .leftJoinAndSelect('mailTemplate.mailTemplateJobLocation', 'mailTemplateJobLocation')
      .leftJoinAndSelect('mailTemplate.mailTemplateKeySkills', 'mailTemplateKeySkills')
      .leftJoinAndSelect('mailTemplateKeySkills.keySkills', 'mailKeySkills')
      .leftJoinAndSelect('mailTemplateJobLocation.templateLocation', 'templateLocation')

    queryBuilder.where('EmailStaging.id = :id', { id });
    queryBuilder.andWhere('emailStagingStatus.title = :title', { title: 'pending' });
    return await queryBuilder.getOne();
  } catch (error) {
    console.log('error in fetch of staging templates', error);
    throw error;
  }
};


// export const fetchEmailTemplatesWithCursor = async (cursor: number) => {
//   try {
//     console.log('fetch called cursor value', cursor);
//     const batchSize = parseInt(process.env.BATCH_SIZE as string);
//     const stagingTemplatesRepository = AppDataSource.getRepository(EmailStaging);
//     const queryBuilder = await stagingTemplatesRepository.createQueryBuilder('EmailStaging')
//       .orderBy('EmailStaging.id')
//       .take(batchSize)
//       .leftJoinAndSelect('EmailStaging.template', 'template')
//       .leftJoinAndSelect('EmailStaging.emailStagingStatus', 'emailStagingStatus')
//       .leftJoinAndSelect('EmailStaging.objectName', 'objectName')
//       .leftJoinAndSelect('objectName.jobs', 'jobs')
//       .leftJoinAndSelect('jobs.jobsKeySkills', 'jobsKeySkills')
//       .leftJoinAndSelect('jobsKeySkills.keySkills', 'keySkills')
//       .leftJoinAndSelect('jobs.jobsLocation', 'jobsLocation')
//       .leftJoinAndSelect('jobsLocation.location', 'location')
//       .leftJoinAndSelect('jobs.payScaleUpperRange', 'payScaleUpperRange')
//       .leftJoinAndSelect('jobs.payScaleLowerRange', 'payScaleLowerRange')
//       .leftJoinAndSelect('jobs.numberSystem', 'numberSystem')
//       .leftJoinAndSelect('jobs.totalExpYearStart', 'totalExpYearStart')
//       .leftJoinAndSelect('jobs.totalExpYearEnd', 'totalExpYearEnd')
//       .leftJoinAndSelect('jobs.user', 'user')
//       .leftJoinAndSelect('objectName.applyJob', 'applyJob')
//       .leftJoinAndSelect('objectName.user', 'objectUser')
//       .leftJoinAndSelect('applyJob.jobSeekerProfile', 'jobSeekerProfile')
//       .leftJoinAndSelect('jobSeekerProfile.currentLocation', 'currentLocation')
//       .leftJoinAndSelect('jobSeekerProfile.totalExpYear', 'totalExpYear')
//       .leftJoinAndSelect('jobSeekerProfile.totalExpMonth', 'totalExpMonth')
//       .leftJoinAndSelect('jobSeekerProfile.noticePeriod', 'noticePeriod')
//       .leftJoinAndSelect('jobSeekerProfile.currentJobTitle', 'currentJobTitle')
//       .leftJoinAndSelect('jobSeekerProfile.keySkills', 'jobSeekerKeySkills')
//       .leftJoinAndSelect('jobSeekerKeySkills.profileKeySkills', 'profileKeySkills')
//       .leftJoinAndSelect('jobSeekerProfile.educations', 'educations')
//       .leftJoinAndSelect('jobSeekerProfile.user', 'jobSeekerUser')
//       .leftJoinAndSelect('jobSeekerProfile.careerProfile', 'careerProfile')
//       .leftJoinAndSelect('careerProfile.careerProfilePreferredLocations', 'careerProfilePreferredLocations')
//       .leftJoinAndSelect('careerProfilePreferredLocations.location', 'careerLocation')
//       .leftJoinAndSelect('jobSeekerProfile.currentCompany', 'currentCompany')
//       .leftJoinAndSelect('objectName.composeMail', 'composeMail')
//       .leftJoinAndSelect('composeMail. mailTemplate', 'mailTemplate')
//       .leftJoinAndSelect('mailTemplate.fromWorkExperience', 'fromWorkExperience')
//       .leftJoinAndSelect('mailTemplate.toWorkExperience', 'toWorkExperience')
//       .leftJoinAndSelect('mailTemplate.currency', 'currency')
//       .leftJoinAndSelect('mailTemplate.minSalaryRange', 'minSalaryRange')
//       .leftJoinAndSelect('mailTemplate.maxSalaryRange', 'maxSalaryRange')
//       .leftJoinAndSelect('mailTemplate.mailTemplateJobLocation', 'mailTemplateJobLocation')
//       .leftJoinAndSelect('mailTemplate.mailTemplateKeySkills', 'mailTemplateKeySkills')
//       .leftJoinAndSelect('mailTemplateKeySkills.keySkills', 'mailKeySkills')
//       .leftJoinAndSelect('mailTemplateJobLocation.templateLocation', 'templateLocation')


//     if (cursor) {
//       queryBuilder.where('EmailStaging.id > :cursor', { cursor });
//     };
//     queryBuilder.andWhere('emailStagingStatus.title = :title', { title: 'pending' });

//     return await queryBuilder.getMany();
//   } catch (error) {
//     console.log('error in fetch of staging templates', error);
//     return;
//   }
// };
