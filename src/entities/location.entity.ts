import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { CareerProfilePreferredLocations } from './careerProfilePreferredLocations.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { JobLocation } from './jobLocation.entity';
import { MailTemplateMailJobLocation } from './MailTemplateJobLocation.entity';
import { ComposeMailJobLocation } from './composeMailJobLocation.entity';

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfilePreferredLocations, (careerProfilePreferredLocations) => careerProfilePreferredLocations.location)
  careerProfilePreferredLocations!: CareerProfilePreferredLocations

  @OneToMany(type => JobSeekerProfileEmployment, j => j.location)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @OneToMany(() => JobLocation, (jobs) => jobs.location)
  location!: JobLocation

  @OneToOne(() => MailTemplateMailJobLocation, (mailTemplateMailJobLocation) => mailTemplateMailJobLocation.templateLocation)
  templateLocation!: MailTemplateMailJobLocation

  @OneToOne(() => ComposeMailJobLocation, (mailTemplateMailJobLocation) => mailTemplateMailJobLocation.composeLocation)
  composeLocation!: ComposeMailJobLocation

}