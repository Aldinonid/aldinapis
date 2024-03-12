import { CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OtodyduckCourse } from "./Course.entity";
import { OtodyduckUser } from "./User.entity";

@Entity({ name: 'otodyduck_my_courses' })
export class OtodyduckMyCourse {
  @PrimaryGeneratedColumn()
  id: number

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