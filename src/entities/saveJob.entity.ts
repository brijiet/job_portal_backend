import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { User } from './user.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class SaveJob extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Jobs, jobs => jobs.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobs" })
  jobs!: Jobs

  @OneToOne(() => JobSeekerProfile, jobSeekerProfile => jobSeekerProfile.jobSeekerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobSeekerProfile" })
  jobSeekerProfile!: JobSeekerProfile

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}