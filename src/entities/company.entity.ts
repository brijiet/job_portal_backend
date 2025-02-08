import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Jobs } from './jobs.entity';

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column({ default: false })
  status!: boolean

  @Column({ type: "text", nullable: true, default: null })
  companyDescription: string | undefined;

  @Column({ nullable: true, default: null })
  jobs!: number;

  @Column({ nullable: true, default: null })
  employeeCount!: number;

  @Column('decimal', { precision: 10, scale: 1, nullable: true, default: null })
  rating!: number;

  @Column({ nullable: true, default: null })
  reviews!: number;

  @OneToOne(() => Jobs, (jobs) => jobs.company)
  company!: Jobs

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}
