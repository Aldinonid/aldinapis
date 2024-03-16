import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StaycationItem } from "./Item.entity";

@Entity({ name: 'staycation_activities' })
export class StaycationActivity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  type: string

  @Column({name: 'image_url'})
  @IsNotEmpty()
  image_url: string

  @ManyToOne(() => StaycationItem, (item) => item.activities)
  @JoinColumn({name: 'item_id'})
  item: StaycationItem

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}