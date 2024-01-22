import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OtodyduckChapter } from "./Chapter.entity";

@Entity({ name: 'otodyduck_lessons' })
export class OtodyduckLesson {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @Column({name: 'video_url'})
  videoUrl: string

  @ManyToOne(() => OtodyduckChapter, (chapter) => chapter.id)
  chapterId: OtodyduckChapter

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}