import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany } from 'typeorm';
import { JobsKeySkills } from './jobsKeySkills.entity';
import { JobSeekerProfileKeySkills } from './jobSeekerProfileKeySkills.entity';
import { MailTemplateKeySkills } from './mailTemplateKeySkills.entity';
import { ResumeSearchKeywords } from './resumeSearchKeywords.entity';
import { ComposeMailKeySkills } from './composeMailKeySkills.entity';

@Entity()
export class KeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @OneToOne(() => JobsKeySkills, (jobs) => jobs.keySkills)
  keySkills!: JobsKeySkills

  @OneToMany(() => JobSeekerProfileKeySkills, (jobs) => jobs.profileKeySkills)
  profileKeySkills!: JobSeekerProfileKeySkills

  @OneToOne(() => MailTemplateKeySkills, (MailTemplate) => MailTemplate.mailTemplateKeySkills)
  mailTemplateKeySkills!: MailTemplateKeySkills

  @OneToOne(() => ResumeSearchKeywords, (resume) => resume.resumeKeySkills)
  resumeKeySkills!: ResumeSearchKeywords

  @OneToOne(() => ComposeMailKeySkills, (compose) => compose.composeKeySkills)
  compKeySkills!: ComposeMailKeySkills

  @Column()
  status!: boolean


}