import { AppDataSource } from "../config/typeorm";
import { MailTemplate } from "../entities/mailTemplate.entity";
import {MailTemplateKeySkills} from '../entities/mailTemplateKeySkills.entity'
import { MailTemplateMailJobLocation } from '../entities/MailTemplateJobLocation.entity';

const mailTemplateRepository = AppDataSource.getRepository(MailTemplate);
const mailTemplateKeySkillsRepository =AppDataSource.getRepository(MailTemplateKeySkills);
const mailTemplateMailJobLocationRepository =AppDataSource.getRepository(MailTemplateMailJobLocation)
export const saveMailTemplate = async (mailTempalteParams: any) => {
  try {
    const mailTemplate = mailTemplateRepository.save(mailTempalteParams);
    return mailTemplate;
  } catch (error) {
    throw error;
  }
}

export const getOneMailTemplate = async (id: number) => {

  try {
    const mailTemplate = await mailTemplateRepository.find({
      where: {
        recruiterUser: { id }
      },
      relations: {
        recruiterUser: true,
        fromWorkExperience: true,
        toWorkExperience: true,
        currency: true,
        minSalaryRange: true,
        maxSalaryRange: true,
        mailTemplateJobLocation: { templateLocation: true },
        mailTemplateKeySkills: { keySkills: true },
        mailTemplateNumberSystem: { numberSystem: true },

      }
    });
    return mailTemplate;

  } catch (error) {
    throw error;
  }
}
export const deleteoneMailTemplate = async (data:any) => {
    try {
      const mailTemplate = mailTemplateRepository.createQueryBuilder()
        .delete()
        .where("id = :id ", { id: data.templateId })
        .execute()
        return mailTemplate;
    } catch (error) {
      throw error;
    }
}
export const getOneMailTemplateDetails = async (id: any) => {
    try {
      const mailTemplate = await mailTemplateRepository.find({
        where: {
          id:id
        },
        relations: {
        recruiterUser: true,
        fromWorkExperience: true,
        toWorkExperience: true,
        currency: true,
        minSalaryRange: true,
        maxSalaryRange: true,
        mailTemplateJobLocation: { templateLocation: true },
        mailTemplateKeySkills: { keySkills: true },
        mailTemplateNumberSystem: { numberSystem: true },
  
        }
      });
      return mailTemplate;
  
    } catch (error) {
      throw error;
    }
}

export const updateExistMailTemplate = async (id:number, mailTempalteParams: any) => {
    try {
      mailTemplateKeySkillsRepository.delete({mailTemplateKeySkills: id as any})
      .then(()=>{
        if(mailTempalteParams?.mailTemplateKeySkills){
          for (let i = 0; i < mailTempalteParams?.mailTemplateKeySkills?.length; i++) {
            let keySkill: any = new Object();
            keySkill.mailTemplateKeySkills = id;
            keySkill.keySkills = mailTempalteParams?.mailTemplateKeySkills[i]?.keySkills;
           mailTemplateKeySkillsRepository.save(keySkill);
          }
        }
      })
      mailTemplateMailJobLocationRepository.delete({mailTemplateJobLocation: id as any}).then(()=>{
        if(mailTempalteParams?.mailTemplateJobLocation){
          for (let i = 0; i < mailTempalteParams?.mailTemplateJobLocation?.length; i++) {
            let jobLocation: any = new Object();
            jobLocation.mailTemplateJobLocation = id;
            jobLocation.templateLocation = mailTempalteParams?.mailTemplateJobLocation[i]?.templateLocation;
            mailTemplateMailJobLocationRepository.save(jobLocation);
          }
        }
      })

     await mailTemplateRepository.update(id,
      {
        templateName:mailTempalteParams.templateName,
        fromEmailId:mailTempalteParams.fromEmailId,
        subject:mailTempalteParams.subject,
        jobTitle:mailTempalteParams.jobTitle,
        jobSubject:mailTempalteParams.jobSubject,
        message:mailTempalteParams.message,
        signature:mailTempalteParams.signature,
        fromWorkExperience:mailTempalteParams.fromWorkExperience,
        toWorkExperience:mailTempalteParams.toWorkExperience,
        currency:mailTempalteParams.currency,
        minSalaryRange:mailTempalteParams.minSalaryRange,
        maxSalaryRange:mailTempalteParams.maxSalaryRange,
        mailTemplateNumberSystem:mailTempalteParams.mailTemplateNumberSystem
      } )
     const mailTemplate = await mailTemplateRepository.findOneBy({id });
    return mailTemplate;
    } catch (error) {
      console.log(error)
      throw error;
    }}