
import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { EmailDuration } from './emailDuration.entity';

@Entity()
export class EmailNotificationPrivacy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => JobSeekerProfile, (blocked) => blocked.notificationPrivacy, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  notificationPrivacy!: JobSeekerProfile

  @Column({ default: null, type: 'text' })
  privacy!: string

  @OneToOne(() => EmailDuration, recommended => recommended.jobRecommended, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobRecommended" })
  jobRecommended!: EmailDuration

  @OneToOne(() => EmailDuration, alerts => alerts.jobAlert, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobAlert" })
  jobAlert!: EmailDuration

  @Column({ default: false })
  mobileNotification!: boolean
}