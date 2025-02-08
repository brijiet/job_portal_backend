import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { KeySkills } from './keySkills.entity';
import { ComposeMail } from './composeMail.entity';

@Entity()
export class ComposeMailKeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => ComposeMail, compose => compose.composeMailKeySkills, { nullable: true, onDelete: "CASCADE" })
  composeMailKeySkills!: ComposeMail

  @OneToOne(() => KeySkills, (keySkills) => keySkills.compKeySkills, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  composeKeySkills!: KeySkills

}