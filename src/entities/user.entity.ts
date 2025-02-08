import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { Jobs } from './jobs.entity';
import { Companies } from './companies.entity';
import { ApplyJobs } from './applyJobs.entity';
import { SaveJob } from './saveJob.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';
import { CommunicationsMaster } from './communicationsMaster.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ nullable: false, unique: true })
  email!: string

  @Column({ default: null })
  accountType!: string

  @Column({ default: null })
  accountId!: string

  @Column({ default: null })
  mobileNumber!: string

  @Column({ default: null })
  hashedPassword?: string

  @Column({ default: null })
  userType!: string

  @OneToOne(() => JobSeekerProfile)
  @JoinColumn({ name: 'jobSeekerProfileId', referencedColumnName: 'id' })
  jobSeekerProfile!: JobSeekerProfile

  @Column({ default: false })
  isEmailVerified!: boolean

  @Column({ default: false })
  isMobileVerified!: boolean

  @OneToOne(() => ComposeMail, (user) => user.recruiterUser)
  recruiterUser!: ComposeMail

  @OneToOne(() => MailTemplate, (user) => user.recruiterUser)
  mailTemplateUser!: MailTemplate

  @Column({ default: null, nullable: true })
  otp!: string

  @ManyToOne(() => Companies, (companies) => companies.user, { createForeignKeyConstraints: true, cascade: true })
  companies!: Companies

  @Column({ default: null, nullable: true, type: 'text' })
  emailVerifyLink!: string;

  @OneToOne(() => Jobs, (jobs) => jobs.user)
  jobs!: Jobs

  @Column({ default: null })
  resetToken!: string

  @Column({ nullable: true })
  resetTokenExpiry!: Date

  @OneToOne(() => CommunicationsMaster, (communications) => communications.recruiterUser)
  recruiterCommunications!: CommunicationsMaster

}
