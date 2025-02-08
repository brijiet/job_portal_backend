import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';

@Entity()
export class SalaryRange extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.payScaleLowerRange)
  payScaleLowerRange!: Jobs

  @OneToOne(() => Jobs, (jobs) => jobs.payScaleUpperRange)
  payScaleUpperRange!: Jobs

  @OneToOne(() => MailTemplate, (mailTemplate) => mailTemplate.minSalaryRange)
  templateMinSalaryRange!: MailTemplate

  @OneToOne(() => MailTemplate, (mailTemplate) => mailTemplate.maxSalaryRange)
  templateMaxSalaryRange!: MailTemplate

  @OneToOne(() => ComposeMail, (compose) => compose.minSalaryRange)
  composeMinSalaryRange!: ComposeMail

  @OneToOne(() => ComposeMail, (compose) => compose.maxSalaryRange)
  composeMaxSalaryRange!: ComposeMail

}