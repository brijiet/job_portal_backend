import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';
import { ResumeSearch } from './resumeSearch.entity';

@Entity()
export class Currency extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.currency)
  careerProfile!: CareerProfile

  @OneToOne(() => Jobs, (careerProfile) => careerProfile.currency)
  jobs!: Jobs

  @OneToOne(() => MailTemplate, (templateCurrency) => templateCurrency.currency)
  tempCurrency!: MailTemplate

  @OneToOne(() => ComposeMail, (composeCurrency) => composeCurrency.currency)
  composeCurrency!: ComposeMail

  @OneToMany(type => JobSeekerProfileEmployment, j => { j.currencyType, j.monthlyStipendCurrencyType })
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

}