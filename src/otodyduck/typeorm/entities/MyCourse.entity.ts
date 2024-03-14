import { CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OtodyduckCourse } from "./Course.entity";
import { OtodyduckUser } from "./User.entity";

@Entity({ name: 'otodyduck_my_courses' })
export class OtodyduckMyCourse {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => OtodyduckCourse)
  @JoinColumn({name: 'course_id'})
  course: OtodyduckCourse

  @ManyToOne(() => OtodyduckUser)
  @JoinColumn({name: 'user_id'})
  user: OtodyduckUser

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}