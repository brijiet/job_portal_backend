import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';
import { MailTemplateMailJobLocation } from './MailTemplateJobLocation.entity';

@Entity()
export class JobLocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Jobs, jobs => jobs.jobsLocation, { nullable: true, onDelete: "CASCADE" })
  jobsLocation!: Jobs

  @OneToOne(() => MailTemplateMailJobLocation, (location) => location)
  jobLocation!: MailTemplateMailJobLocation

  @OneToOne(() => Location, (location) => location.location, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "location" })
  location!: Location

}