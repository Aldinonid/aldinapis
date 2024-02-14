import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StaycationImage } from "./Image.entity";
import { StaycationActivity } from "./Activity.entity";
import { StaycationFeature } from "./Feature.entity";
import { StaycationCategory } from "./Category.entity";

@Entity({ name: 'staycation_items' })
export class StaycationItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  title: string

  @Column()
  @IsNotEmpty()
  price: number

  @Column()
  @IsNotEmpty()
  city: string

  @Column()
  @IsNotEmpty()
  about: string

  @Column()
  country: string

  @Column({name: 'is_popular'})
  isPopular: boolean

  @Column()
  unit: string

  @Column({name: 'sum_booking'})
  sumBooking: number

  @OneToOne(() => StaycationCategory)
  category: StaycationCategory

  @OneToMany(() => StaycationImage, (image) => image.id)
  images: StaycationImage[]

  @OneToMany(() => StaycationActivity, (activity) => activity.id)
  activities: StaycationActivity[]

  @OneToMany(() => StaycationFeature, (feature) => feature.id)
  features: StaycationFeature[]
}