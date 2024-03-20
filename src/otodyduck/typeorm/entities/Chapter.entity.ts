import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OtodyduckCourse } from "./Course.entity";
import { OtodyduckLesson } from "./Lesson.entity";

@Entity({ name: 'otodyduck_chapters' })
export class OtodyduckChapter {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @OneToOne(() => OtodyduckCourse)
  @JoinColumn({name: 'course_id'})
  course: OtodyduckCourse

  @OneToMany(() => OtodyduckLesson, (lesson) => lesson.chapter)
  @JoinColumn({name: 'lesson_ids'})
  lessons?: OtodyduckLesson[]

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}