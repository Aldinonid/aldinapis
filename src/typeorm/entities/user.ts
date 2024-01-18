import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Post } from "./Post";

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]
}