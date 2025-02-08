
import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';
import { CommunicationsMaster } from './communicationsMaster.entity';
import { EmailStaging } from './emailStaging.entity';
import { MessagesAttachment } from './messageAttachment.entity';

@Entity()
export class Messages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CommunicationsMaster, (communications) => communications.messages, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  communications!: CommunicationsMaster

  @Column({ type: 'longtext' })
  messageBody!: string

  @Column()
  senderId!: string

  @Column()
  receiverId!: string

  @Column()
  messageType!: string

  @Column({ default: 0 })
  isRead!: number

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdDate!: Date

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedDate!: Date

  @OneToOne(() => EmailStaging, (emailStaging) => emailStaging.message)
  emailStaging!: EmailStaging

  @OneToMany(() => MessagesAttachment, (attachment) => attachment.messages, { onDelete: 'CASCADE', cascade: true, createForeignKeyConstraints: true })
  @JoinColumn()
  messagesAttachment!: MessagesAttachment[]
}