import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { EmailNotificationPrivacy } from './emailNotificationPrivacy.entity';

@Entity()
export class EmailDuration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => EmailNotificationPrivacy, (recommended) => recommended.jobRecommended)
  jobRecommended!: EmailNotificationPrivacy

  @OneToOne(() => EmailNotificationPrivacy, (alerts) => alerts.jobAlert)
  jobAlert!: EmailNotificationPrivacy
}