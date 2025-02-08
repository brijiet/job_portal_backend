import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string;

  @Column()
  educationType!: string;

  @Column()
  status!: boolean

}