import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';

@Entity()
export class TotalExpYear extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  value!: number;

  @Column()
  status!: boolean

  @OneToMany(type => JobSeekerProfileEmployment, j => j.totalExpYears)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @OneToOne(() => Jobs, (jobs) => jobs.totalExpYearStart)
  totalExpYearStart!: Jobs

  @OneToOne(() => Jobs, (jobs) => jobs.totalExpYearEnd)
  totalExpYearEnd!: Jobs

  @OneToOne(() => MailTemplate, (jobs) => jobs.fromWorkExperience)
  templateFromWorkExperience!: MailTemplate

  @OneToOne(() => MailTemplate, (jobs) => jobs.toWorkExperience)
  templateToWorkExperience!: MailTemplate

  @OneToOne(() => ComposeMail, (compose) => compose.fromWorkExperience)
  composeFromWorkExperience!: ComposeMail

  @OneToOne(() => ComposeMail, (compose) => compose.toWorkExperience)
  composeToWorkExperience!: ComposeMail

}
