import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Unique, Index, ManyToOne } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';
import { Department } from './department.entity';
import { RoleCategory } from './roleCategory.entity';
import { JobRole } from './jobRole.entity';
import { Currency } from './currency.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { TotalExpMonth } from './totalExpMonth.entity';
import { PersonalDetails } from './personalDetails.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { CareerProfile } from './careerProfile.entity';
import { JobTitle } from './jobTitle.entity';
import { JobSeekerProfileKeySkills } from './jobSeekerProfileKeySkills.entity';
import { Companies } from './companies.entity';
import { ApplyJobs } from './applyJobs.entity';
import { SaveJob } from './saveJob.entity';
import { ComposeMail } from './composeMail.entity';
import { ComposeMailJobSeekerProfile } from './composeMailJobSeekerProfile.entity';
import { ApplicantStatusJobSeekerProfile } from './applicantStatusJobSeekerProfile.entity';
import { CommunicationsMaster } from './communicationsMaster.entity';
import { BlockedCompanies } from './blockedCompanies.entity';
import { EmailNotificationPrivacy } from './emailNotificationPrivacy.entity';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryColumn()
  id!: number

  @Column({ default: 'null' })
  jobSeekerType!: string

  @Column({ default: null, nullable: true })
  resumePath!: string

  @Column({ default: null, nullable: true })
  resumeFile!: string

  @Column({ default: null, nullable: true })
  profilePicturePath!: string

  @Column({ default: null, nullable: true })
  profilePictureFile!: string

  @Column({ default: null })
  noOfSections!: number

  @Column({ default: null })
  completedSections!: number

  @Column({ default: null, nullable: true, type: 'text' })
  profileSummary!: string

  @Column({ default: null, nullable: true, type: 'text' })
  about!: string

  @Column({ default: null, type: 'text' })
  resumeHeadline!: string

  @ManyToOne(() => Location, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'currentLocationId', referencedColumnName: 'id' })
  currentLocation!: Location | null

  @ManyToOne(() => TotalExpYear, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'totalExpYearId', referencedColumnName: 'id' })
  totalExpYear!: TotalExpYear | null

  @ManyToOne(type => TotalExpMonth, t => t.jobSeekerProfile, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'totalExpMonthId', referencedColumnName: 'id' })
  totalExpMonth!: TotalExpMonth | null


  @Column({ default: null })
  currentSalary!: number

  @ManyToOne(() => Currency, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'currentCurrencyId', referencedColumnName: 'id' })
  currentCurrency!: Currency | null

  @Column({ default: 'India' })
  currentCountry!: string

  // @OneToMany(() => Location, (location) => location.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  // preferredLocations!: Location[]

  @OneToMany(() => JobSeekerProfileKeySkills, (keySkills) => keySkills.jobSeekerProfileKeySkills, { createForeignKeyConstraints: true, cascade: true })
  keySkills!: JobSeekerProfileKeySkills[]

  @ManyToOne(() => Industry)
  @JoinColumn()
  industry!: Industry

  @ManyToOne(() => NoticePeriod, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  noticePeriod!: NoticePeriod | null

  @ManyToOne(() => JobTitle, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  currentJobTitle!: JobRole[] | null

  @ManyToOne(() => Companies, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  currentCompany!: Companies | null

  @OneToOne(() => ApplyJobs, (applyJobs) => applyJobs.jobSeekerProfile)
  jobSeekerProfile!: ApplyJobs

  @OneToOne(() => SaveJob, (saveJobs) => saveJobs.jobSeekerProfile)
  saveJobs!: SaveJob

  @OneToOne(() => ComposeMailJobSeekerProfile, (composeJobSeekerProfile) => composeJobSeekerProfile.composeJobSeekerProfile)
  composeJobSeekerProfile!: ComposeMailJobSeekerProfile

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  educations!: Education[]

  @OneToMany(() => JobSeekerProfileEmployment, (employment) => employment.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  employments!: JobSeekerProfileEmployment[]

  @OneToMany(() => ApplicantStatusJobSeekerProfile, (applicantStatus) => applicantStatus.applicantId, { createForeignKeyConstraints: true, cascade: true })
  applicantId!: ApplicantStatusJobSeekerProfile[]

  @OneToOne(() => PersonalDetails, personalDetails => personalDetails.jobSeekerProfile)
  personalDetails: PersonalDetails | undefined;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user!: User

  @OneToOne(() => CommunicationsMaster, (communications) => communications.jobSeekerUser)
  jobSeekerCommunications!: CommunicationsMaster

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.jobSeekerProfile)
  careerProfile!: CareerProfile

  @UpdateDateColumn({ type: "timestamp", default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  profileLastUpdated!: Date
  @UpdateDateColumn({ type: 'timestamp', default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  resumeLastUpdated!: Date

  @Column({ default: true })
  isSubscribedForAlerts!: boolean

  @OneToMany(() => BlockedCompanies, (blocked) => blocked.jobSeeker, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: true })
  @JoinColumn()
  jobSeeker!: BlockedCompanies[]

  @OneToMany(() => EmailNotificationPrivacy, (blocked) => blocked.notificationPrivacy, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: true })
  @JoinColumn()
  notificationPrivacy!: EmailNotificationPrivacy[]
}
