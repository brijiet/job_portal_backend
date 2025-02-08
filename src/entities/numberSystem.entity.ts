import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';


@Entity()
export class NumberSystem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.numberSystem)
  numberSystem!: Jobs

  @OneToOne(() => MailTemplate, (mailTemplate) => mailTemplate.mailTemplateNumberSystem)
  mailTemplateNumberSystem!: MailTemplate

  @OneToOne(() => ComposeMail, (mailTemplate) => mailTemplate.composeNumberSystem)
  composeNumberSystem!: ComposeMail
}