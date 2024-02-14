import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StaycationItem } from "./Item.entity";

@Entity({ name: 'staycation_features' })
export class StaycationFeature {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  qty: number

  @Column({name: 'image_url'})
  @IsNotEmpty()
  imageUrl: string

  @OneToMany(() => StaycationItem, (item) => item.id)
  items: StaycationItem[]
}