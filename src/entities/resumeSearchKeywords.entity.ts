import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ResumeSearch } from './resumeSearch.entity';
import { KeySkills } from './keySkills.entity';

@Entity()
export class ResumeSearchKeywords extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ResumeSearch, resumeSearch => resumeSearch.resumeSearchKeywords, { nullable: true, onDelete: "CASCADE" })
  resumeSearchKeywords!: ResumeSearch

  @OneToOne(() => KeySkills, (keySkills) => keySkills.resumeKeySkills, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "resumeKeySkills" })
  resumeKeySkills!: KeySkills
}