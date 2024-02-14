import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StaycationItem } from "./Item.entity";

@Entity({ name: 'staycation_categories' })
export class StaycationCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @OneToMany(() => StaycationItem, (item) => item.id)
  items: StaycationItem[]
}