import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { IsEmail, IsNotEmpty } from "class-validator";

export enum OtodyduckUserRole {
  Teacher = 'teacher',
  Student = 'student',
  Admin = 'admin'
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
    default: OtodyduckUserRole.Student
  })
  role: OtodyduckUserRole

  @Column({nullable: true})
  avatar: string

  @Column()
  job: string

  @Column({default: new Date()})
  createdAt: Date

  @Column({nullable: true})
  updatedAt: Date

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}