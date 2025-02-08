import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { KeySkills } from './keySkills.entity';
import { ComposeMail } from './composeMail.entity';
import { MailTemplate } from './mailTemplate.entity';

@Entity()
export class MailTemplateKeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => MailTemplate, MailTemplate => MailTemplate.mailTemplateKeySkills, { nullable: true, onDelete: "CASCADE" })
  mailTemplateKeySkills!: MailTemplate

  @OneToOne(() => KeySkills, (keySkills) => keySkills.keySkills, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "keySkills" })
  keySkills!: KeySkills

}