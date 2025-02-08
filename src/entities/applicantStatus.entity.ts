import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { ApplicantStatusJobSeekerProfile } from './applicantStatusJobSeekerProfile.entity';

@Entity()
export class ApplicantStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => ApplicantStatusJobSeekerProfile, (applicantStatus) => applicantStatus.applicantStatusJobSeeker)
  applicantStatusJobSeeker!: ApplicantStatusJobSeekerProfile

}