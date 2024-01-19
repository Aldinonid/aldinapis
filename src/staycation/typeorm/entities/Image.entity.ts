import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'staycation_images' })
export class StaycationImage {
  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'image_url'})
  @IsNotEmpty()
  imageUrl: string
}