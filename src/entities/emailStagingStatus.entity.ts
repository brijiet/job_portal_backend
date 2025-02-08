import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class EmailStagingStatus extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

}