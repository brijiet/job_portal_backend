import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { KeySkills } from './keySkills.entity';
import { ApplicantStatus } from './applicantStatus.entity';
import { Job } from 'node-schedule';
import { Jobs } from './jobs.entity';

@Entity()
export class ApplicantStatusJobSeekerProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => JobSeekerProfile, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  applicantId!: JobSeekerProfile

  @OneToOne(() => ApplicantStatus, (applicantStatus) => applicantStatus.applicantStatusJobSeeker, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "applicantStatusJobSeeker" })
  applicantStatusJobSeeker!: ApplicantStatus

  @Column()
  applicantStatus!: string;

  @OneToOne(() => Jobs, (applicantStatus) => applicantStatus.JobId, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "JobId" })
  JobId!: Job
}