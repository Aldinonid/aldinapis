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

  @Column({ select: false })
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

  @Column({
    name: 'refresh_token',
    nullable: true,
    select: false
  })
  refresh_token: string

  @Column({
    name: 'access_token',
    nullable: true,
    select: false
  })
  access_token: string

  @OneToMany(() => OtodyduckCourse, (course) => course.id)
  courses: OtodyduckCourse[]

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}