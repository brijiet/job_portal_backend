import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectNameType } from './objectNameType.entity';
import { Jobs } from './jobs.entity';
import { ApplyJobs } from './applyJobs.entity';
import { User } from './user.entity';
import { ComposeMail } from './composeMail.entity';

@Entity()
export class ObjectName extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ObjectNameType, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  objectNameType!: ObjectNameType | null

  @ManyToOne(() => Jobs, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  jobs!: Jobs | undefined

  @ManyToOne(() => ApplyJobs, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  applyJob!: ApplyJobs | undefined

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  user!: User | undefined

  @ManyToOne(() => ComposeMail, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  composeMail!: ComposeMail | undefined
}