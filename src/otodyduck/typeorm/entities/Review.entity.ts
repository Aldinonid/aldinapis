import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OtodyduckCourse } from "./Course.entity";
import { OtodyduckUser } from "./User.entity";

@Entity({ name: 'otodyduck_reviews' })
export class OtodyduckReview {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  rating: number

  @Column()
  note: string

  @OneToOne(() => OtodyduckCourse)
  @JoinColumn({name: 'course_id'})
  courseId: OtodyduckCourse

  @OneToOne(() => OtodyduckUser)
  @JoinColumn({name: 'user_id'})
  userId: OtodyduckUser

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}