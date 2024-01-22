import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { IsEmail, IsNotEmpty } from "class-validator";
import { OtodyduckCourse } from "./Course.entity";

export enum OtodyduckUserRole {
  TEACHER = 'teacher',
  STUDENT = 'student',
  ADMIN = 'admin'
}

@Entity({ name: 'otodyduck_users' })
export class OtodyduckUser {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({unique: true})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({
    type: 'enum',
    enum: OtodyduckUserRole,
    default: OtodyduckUserRole.STUDENT
  })
  role: OtodyduckUserRole

  @Column({nullable: true})
  avatar: string

  @Column()
  job: string

  @OneToMany(() => OtodyduckCourse, (course) => course.id)
  courseIds: OtodyduckCourse[]

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}