import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { EmailTemplate } from './emailTemplate.entity';
import { EmailStagingStatus } from './emailStagingStatus.entity';
import { ObjectName } from './objectName.entity';
import { ObjectNameType } from './objectNameType.entity';
import { Messages } from './messages.entity';

@Entity()
export class EmailStaging extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  emailTo!: string;

  @Column({ nullable: true, default: null })
  senderUserId!: number;

  @Column({ default: null })
  subject!: string;

  @Column({ default: null })
  emailCC!: string;

  @Column({ default: null })
  emailBCC!: string;

  @ManyToOne(() => EmailTemplate, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  template!: EmailTemplate | null

  @ManyToOne(() => EmailStagingStatus, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  emailStagingStatus!: EmailStagingStatus | null

  @ManyToOne(() => ObjectName, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  objectName!: ObjectName | null

  @ManyToOne(() => ObjectNameType, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  objectNameType!: ObjectNameType | null

  @CreateDateColumn({ type: "timestamp", default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  scheduledDate!: Date

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  createDate!: Date

  @ManyToOne(() => Messages, (message) => message.emailStaging)
  message!: Messages
  
  @Column()
  priority!: number
}
