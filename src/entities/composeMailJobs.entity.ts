import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { KeySkills } from './keySkills.entity';
import { ComposeMail } from './composeMail.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class ComposeMailJobs extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => ComposeMail, compose => compose.composeMailJobs, { nullable: true, onDelete: "CASCADE" })
  composeMailJobs!: ComposeMail

  @OneToOne(() => Jobs, (composeJob) => composeJob.composeJob, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  composeJob!: Jobs

}