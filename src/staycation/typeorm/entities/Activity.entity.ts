import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
  imageUrl: string

  @OneToOne(() => StaycationItem)
  @JoinColumn()
  item: StaycationItem
}