import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StaycationItem } from "./Item.entity";

@Entity({ name: 'staycation_images' })
export class StaycationImage {
  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'image_url'})
  @IsNotEmpty()
  image_url: string

  @ManyToMany(() => StaycationItem, (item) => item.images)
  items: StaycationItem

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}