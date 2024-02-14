import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: 'otodyduck_tools' })
export class OtodyduckTool {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  url: string

  @Column()
  image: string

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}