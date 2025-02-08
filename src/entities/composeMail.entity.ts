import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { ComposeMailJobSeekerProfile } from './composeMailJobSeekerProfile.entity';
import { MailTemplate } from './mailTemplate.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { Currency } from './currency.entity';
import { SalaryRange } from './salaryRange.entity';
import { NumberSystem } from './numberSystem.entity';
import { ComposeMailJobLocation } from './composeMailJobLocation.entity';
import { ComposeMailKeySkills } from './composeMailKeySkills.entity';
import { Jobs } from './jobs.entity';
import { ComposeMailJobs } from './composeMailJobs.entity';

@Entity()
export class ComposeMail extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @OneToMany(() => ComposeMailJobSeekerProfile, user => user.applicantUser, { createForeignKeyConstraints: true, cascade: true })
  applicantUser!: ComposeMailJobSeekerProfile[]

  @OneToOne(() => User, (user) => user.recruiterUser, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'recruiterUser' })
  recruiterUser!: User

  @OneToOne(() => MailTemplate, (template) => template.mailTemplate, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'mailTemplate' })
  mailTemplate!: MailTemplate

  @Column({ type: "text", nullable: true, default: null })
  subject!: string;

  @Column({ type: "text", nullable: true, default: null })
  fromEmailId!: string;

  @Column({ type: "text", nullable: true, default: null })
  jobTitle!: string;

  @Column({ type: "text", nullable: true, default: null })
  jobSubject!: string;

  @OneToOne(() => TotalExpYear, (template) => template.composeFromWorkExperience, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'fromWorkExperience' })
  fromWorkExperience!: TotalExpYear

  @OneToOne(() => TotalExpYear, (template) => template.composeToWorkExperience, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'toWorkExperience' })
  toWorkExperience!: TotalExpYear

  @OneToOne(() => Currency, (currency) => currency.composeCurrency, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'currency' })
  currency!: Currency

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.composeMinSalaryRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'minSalaryRange' })
  minSalaryRange!: SalaryRange

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.composeMaxSalaryRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'maxSalaryRange' })
  maxSalaryRange!: SalaryRange

  @OneToOne(() => NumberSystem, (numberSystem) => numberSystem.composeNumberSystem, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'numberSystem' })
  composeNumberSystem!: NumberSystem

  @OneToMany(() => ComposeMailJobLocation, (composeMailJobLocation) => composeMailJobLocation.composeJobLocation, { createForeignKeyConstraints: true, cascade: true })
  composeJobLocation!: ComposeMailJobLocation[]

  @OneToMany(() => ComposeMailKeySkills, (compose) => compose.composeMailKeySkills, { createForeignKeyConstraints: true, cascade: true })
  composeMailKeySkills!: ComposeMailKeySkills[]

  @OneToMany(() => ComposeMailJobs, (jobs) => jobs.composeMailJobs, { createForeignKeyConstraints: true, cascade: true })
  composeMailJobs!: ComposeMailJobs[]

  @Column({ type: "text", nullable: true, default: null })
  message!: string;

  @Column({ type: "text", nullable: true, default: null })
  signature!: string;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}