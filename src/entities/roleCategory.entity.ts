import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class RoleCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string;

  @Column()
  dapartment!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.roleCategory)
  careerProfile!: CareerProfile

  @OneToOne(() => Jobs, (jobs) => jobs.roleCategory)
  roleCategory!: Jobs

}