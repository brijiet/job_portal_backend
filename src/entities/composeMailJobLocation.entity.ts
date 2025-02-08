import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { MailTemplate } from './mailTemplate.entity';
import { Location } from './location.entity';
import { ComposeMail } from './composeMail.entity';

@Entity()
export class ComposeMailJobLocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => ComposeMail, compose => compose.composeJobLocation, { nullable: true, onDelete: "CASCADE" })
  composeJobLocation!: ComposeMail

  @OneToOne(() => Location, (location) => location.composeLocation, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "composeLocation" })
  composeLocation!: Location
}