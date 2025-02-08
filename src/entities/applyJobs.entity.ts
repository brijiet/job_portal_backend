import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { User } from './user.entity';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';
import { MultipleChoiceQuestionnaireAnswer } from './multipleChoiceQuestionnaireAnswer.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class ApplyJobs extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Jobs, jobs => jobs.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobs" })
  jobs!: Jobs

  @OneToMany(() => QuestionnaireAnswer, (questionnaireAnswer) => questionnaireAnswer.questionnaireAnswer, { createForeignKeyConstraints: true, cascade: true })
  questionnaireAnswer!: QuestionnaireAnswer[]

  @OneToMany(() => MultipleChoiceQuestionnaireAnswer, (multipleChoiceQuestionnaireAnswer) => multipleChoiceQuestionnaireAnswer.multipleChoiceQuestionnaireAnswer, { createForeignKeyConstraints: true, cascade: true })
  multipleChoiceQuestionnaireAnswer!: MultipleChoiceQuestionnaireAnswer[]

  @OneToOne(() => JobSeekerProfile, jobSeekerProfile => jobSeekerProfile.jobSeekerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobSeekerProfile" })
  jobSeekerProfile!: JobSeekerProfile

  @Column({ type: "text", nullable: true, default: null })
  subject: string | undefined;

  @Column({ type: "text", nullable: true, default: null })
  message: string | undefined;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  applyDate!: Date
}