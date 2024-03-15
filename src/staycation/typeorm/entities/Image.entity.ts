import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StaycationItem } from "./Item.entity";

@Entity({ name: 'staycation_images' })
export class StaycationImage {
  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'image_url'})
  @IsNotEmpty()
  image_url: string

  @ManyToOne(() => StaycationItem, (item) => item.images)
  @JoinColumn({name: 'item_id'})
  item: StaycationItem

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}