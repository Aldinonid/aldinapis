import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { OtodyduckCourse } from "./Course.entity";

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

  @ManyToMany(() => OtodyduckCourse, course => course.tools)
  courses: OtodyduckCourse[]

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}