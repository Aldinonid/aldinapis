import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { OtodyduckLevel } from "src/utils/enums";
import { OtodyduckTool } from "./Tool.entity";
import { OtodyduckUser } from "./User.entity";
import { OtodyduckReview } from "./Review.entity";
import { OtodyduckFlow } from "./Flow.entity";

@Entity({ name: 'otodyduck_courses' })
export class OtodyduckCourse {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  slug: string

  @Column()
  certificate: boolean

  @Column()
  thumbnail: string

  @Column()
  type: string

  @Column()
  status: string

  @Column()
  price: number

  @Column()
  level: OtodyduckLevel

  @Column()
  description: string

  @Column()
  category: string

  @ManyToMany(() => OtodyduckTool, (tool) => tool.courses)
  @JoinTable({
    name: 'otodyduck_courses_tools',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tool_id',
      referencedColumnName: 'id'
    }
  })
  tools: OtodyduckTool[]

  @ManyToMany(() => OtodyduckFlow, (flow) => flow.courses)
  @JoinTable({
    name: 'otodyduck_courses_flows',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'flow_id',
      referencedColumnName: 'id'
    }
  })
  flows: OtodyduckTool[]

  @ManyToOne(() => OtodyduckUser, (user) => user.courses)
  @JoinColumn({name: 'user_id'})
  user: OtodyduckUser

  @OneToOne(() => OtodyduckReview, (review) => review.courseId)
  review: OtodyduckReview

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}