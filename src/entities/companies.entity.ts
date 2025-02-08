import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';
import { Department } from './department.entity';
import { CompanyType } from './companyType.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';
import { BlockedCompanies } from './blockedCompanies.entity';

@Entity()
export class Companies extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column({ default: false })
  status!: boolean

  @OneToMany(() => User, user => user.companies, { nullable: true, onDelete: "CASCADE" })
  user!: User[]

  @Column({ type: "text", nullable: true, default: null })
  companyDescription: string | undefined;

  @Column({ type: "text", nullable: true, default: null })
  companyAddress: string | undefined;

  @Column({ type: "text", nullable: true, default: null })
  websiteUrl: string | undefined;

  @Column({ type: "text", nullable: true, default: null })
  companyImage: string | undefined;

  @OneToMany(() => Jobs, (jobs) => jobs.company, { nullable: true, createForeignKeyConstraints: true, cascade: true })
  jobs!: Jobs[] | null

  @Column({ nullable: true, default: null })
  employeeCount!: number;

  @Column('decimal', { precision: 10, scale: 1, nullable: true, default: null })
  rating!: number;

  @Column({ nullable: true, default: null })
  reviews!: number;

  @ManyToMany(() => Location)
  @JoinTable()
  location!: Location[] | null

  @OneToMany(() => Department, (department) => department.companies, { nullable: true, createForeignKeyConstraints: true, cascade: true, })
  department!: Department[] | null

  @OneToMany(() => CompanyType, (companyType) => companyType.companies, { nullable: true, createForeignKeyConstraints: true, cascade: true, })
  companyType!: CompanyType[] | null

  @OneToMany(() => Industry, (industry) => industry.companies, { nullable: true, createForeignKeyConstraints: true, cascade: true, })
  industry!: Industry[] | null

  @OneToOne(() => BlockedCompanies, (blocked) => blocked.company)
  company!: BlockedCompanies

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}