import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { MailTemplate } from './mailTemplate.entity';
import { Location } from './location.entity';

@Entity()
export class MailTemplateMailJobLocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => MailTemplate, mailTemplate => mailTemplate.mailTemplateJobLocation, { nullable: true, onDelete: "CASCADE" })
  mailTemplateJobLocation!: MailTemplate

  @OneToOne(() => Location, (location) => location.templateLocation, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "templateLocation" })
  templateLocation!: Location
}