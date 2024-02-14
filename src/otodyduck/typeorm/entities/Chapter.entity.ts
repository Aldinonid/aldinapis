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
  courseId: OtodyduckCourse

  @OneToMany(() => OtodyduckLesson, (lesson) => lesson.chapterId)
  chapterIds: OtodyduckLesson[]

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}