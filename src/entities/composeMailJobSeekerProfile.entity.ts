import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ComposeMail } from './composeMail.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class ComposeMailJobSeekerProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => ComposeMail, (composeMail) => composeMail.applicantUser, { nullable: true, onDelete: "CASCADE" })
  applicantUser!: ComposeMail

  @OneToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.composeJobSeekerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "composeJobSeekerProfile" })
  composeJobSeekerProfile!: JobSeekerProfile

}