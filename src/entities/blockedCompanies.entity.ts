
import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { Companies } from './companies.entity';

@Entity()
export class BlockedCompanies extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => JobSeekerProfile, (blocked) => blocked.jobSeeker, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  jobSeeker!: JobSeekerProfile

  @OneToOne(() => Companies, (company) => company.company, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: false, nullable: true })
  @JoinColumn()
  company!: Companies


}