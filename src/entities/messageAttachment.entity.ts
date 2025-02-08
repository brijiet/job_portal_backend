
import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { Messages } from './messages.entity';

@Entity()
export class MessagesAttachment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'text' })
  attachment!: string

  @ManyToOne(() => Messages, (attachment) => attachment.messagesAttachment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  messages!: Messages
}