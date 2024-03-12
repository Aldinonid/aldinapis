import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { OtodyduckLevel } from "src/utils/enums";
import { OtodyduckCourse } from "./Course.entity";

@Entity({ name: 'otodyduck_flows' })
export class OtodyduckFlow {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  slug: string

  @Column()
  image: string

  @Column({
    type: 'enum',
    enum: OtodyduckLevel
  })
  @IsNotEmpty()
  level: OtodyduckLevel

  @ManyToMany(() => OtodyduckCourse, course => course.flows)
  courses: OtodyduckCourse[]

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}