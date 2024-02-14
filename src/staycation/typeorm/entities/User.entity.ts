import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity({ name: 'staycation_users' })
export class StaycationUser {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}