import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { OtodyduckLevel } from "src/utils/enums";
import { OtodyduckTool } from "./Tool.entity";
import { OtodyduckUser } from "./User.entity";
import { OtodyduckReview } from "./Review.entity";

@Entity({ name: 'otodyduck_courses' })
export class OtodyduckCourse {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  slug: string

  @Column()
  certificate: string

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

  @ManyToMany(() => OtodyduckTool)
  @JoinTable()
  tools: OtodyduckTool[]

  @ManyToOne(() => OtodyduckUser, (user) => user.id)
  userId: OtodyduckUser

  @OneToOne(() => OtodyduckReview, (review) => review.courseId)
  review: OtodyduckReview

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}