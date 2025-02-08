import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ResumeSearchKeywords } from './resumeSearchKeywords.entity';
import { Currency } from './currency.entity';

@Entity()
export class ResumeSearch extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @OneToMany(() => ResumeSearchKeywords, keywords => keywords.resumeSearchKeywords, { createForeignKeyConstraints: true, cascade: true })
  resumeSearchKeywords!: ResumeSearchKeywords[]

  @Column({ default: null })
  minExperience!: string;

  @Column({ default: null })
  maxExperience!: string

  @Column({ default: null })
  minSalary!: string;

  @Column({ default: null })
  maxSalary!: string

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}