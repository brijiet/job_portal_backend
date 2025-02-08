
import { Entity, Column, BaseEntity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Messages } from './messages.entity';
import { Jobs } from './jobs.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class CommunicationsMaster extends BaseEntity {
  @PrimaryColumn()
  id!: string

  @OneToOne(() => JobSeekerProfile, (user) => user.jobSeekerCommunications, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: false })
  @JoinColumn()
  jobSeekerUser!: JobSeekerProfile

  @OneToOne(() => User, (user) => user.recruiterCommunications, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: false })
  @JoinColumn()
  recruiterUser!: User

  @OneToOne(() => Jobs, (job) => job.communication, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: false })
  @JoinColumn()
  jobsCommunication!: Jobs

  @OneToMany(() => Messages, (messages) => messages.communications, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: true })
  @JoinColumn()
  messages!: Messages[]

}