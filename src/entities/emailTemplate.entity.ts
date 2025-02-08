import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity()
export class EmailTemplate extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique:true})
  title!: string;

  @Column()
  status!: boolean;
}