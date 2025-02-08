import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Specialization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string;

  @Column()
  course!: string;

  @Column()
  status!: boolean

}