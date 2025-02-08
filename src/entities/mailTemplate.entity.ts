import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany, ManyToOne, Column } from 'typeorm';
import { User } from './user.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { Currency } from './currency.entity';
import { SalaryRange } from './salaryRange.entity';
import { NumberSystem } from './numberSystem.entity';
import { MailTemplateMailJobLocation } from './MailTemplateJobLocation.entity';
import { MailTemplateKeySkills } from './mailTemplateKeySkills.entity';
import { ComposeMail } from './composeMail.entity';

@Entity()
export class MailTemplate extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @OneToOne(() => User, (user) => user.recruiterUser, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'recruiterUser' })
  recruiterUser!: User


  @Column({ type: "text", nullable: true, default: null })
  templateName!: string;

  @Column({ type: "text", nullable: true, default: null })
  subject!: string;
  
  @Column({ type: "text", nullable: true, default: null })
  fromEmailId!: string;
  

  @Column({ type: "text", nullable: true, default: null })
  jobTitle!: string;

  @Column({ type: "text", nullable: true, default: null })
  jobSubject!: string;

  @OneToOne(() => TotalExpYear, (template) => template.templateFromWorkExperience, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'fromWorkExperience' })
  fromWorkExperience!: TotalExpYear

  @OneToOne(() => TotalExpYear, (template) => template.templateToWorkExperience, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'toWorkExperience' })
  toWorkExperience!: TotalExpYear

  @OneToOne(() => Currency, (currency) => currency.tempCurrency, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'currency' })
  currency!: Currency

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.templateMinSalaryRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'minSalaryRange' })
  minSalaryRange!: SalaryRange

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.templateMaxSalaryRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'maxSalaryRange' })
  maxSalaryRange!: SalaryRange

  @OneToOne(() => NumberSystem, (numberSystem) => numberSystem.mailTemplateNumberSystem, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: 'mailTemplateNumberSystem' })
  mailTemplateNumberSystem!: NumberSystem

  @OneToMany(() => MailTemplateMailJobLocation, (mailTemplateMailJobLocation) => mailTemplateMailJobLocation.mailTemplateJobLocation, { createForeignKeyConstraints: true, cascade: true })
  mailTemplateJobLocation!: MailTemplateMailJobLocation[]

  @OneToMany(() => MailTemplateKeySkills, (mailTemplateKeySkills) => mailTemplateKeySkills.mailTemplateKeySkills, { createForeignKeyConstraints: true, cascade: true })
  mailTemplateKeySkills!: MailTemplateKeySkills[]

  @Column({ type: "text", nullable: true, default: null })
  message!: string;

  @Column({ type: "text", nullable: true, default: null })
  signature!: string;

  @OneToOne(() => ComposeMail, (composeMail) => composeMail.mailTemplate)
  mailTemplate!: ComposeMail
}