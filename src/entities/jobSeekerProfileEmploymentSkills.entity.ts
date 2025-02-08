import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { KeySkills } from './keySkills.entity';

@Entity()
export class JobSeekerProfileEmploymentSkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  jobSeekerProfileId!: number

  // @Column()
  // job_seeker_employment_id!: number

  @ManyToOne(() => JobSeekerProfileEmployment, (jobSeekerProfileEmployment) => jobSeekerProfileEmployment.jobSeekerProfileEmploymentSkills, { onDelete: 'CASCADE' })
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @ManyToOne(() => KeySkills,{nullable:true,onDelete:'SET NULL',onUpdate:'CASCADE'})
  @JoinColumn()
  keySkills!: KeySkills

  // @Column()
  // keySkills!: string

  
}