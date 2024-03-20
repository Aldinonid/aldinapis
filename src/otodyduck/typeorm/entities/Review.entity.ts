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
  course: OtodyduckCourse

  @OneToOne(() => OtodyduckUser)
  @JoinColumn({name: 'user_id'})
  user: OtodyduckUser

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}