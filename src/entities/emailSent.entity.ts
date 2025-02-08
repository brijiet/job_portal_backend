import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { EmailStaging } from './emailStaging.entity';

@Entity()
export class EmailSent extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => EmailStaging, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  emailStaging!: EmailStaging | null

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  sentDate!: Date

  @Column({type:'longtext'})
  emailBody!:string
}
