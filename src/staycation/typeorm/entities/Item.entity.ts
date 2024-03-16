import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @Column({name: 'is_popular', default: false})
  is_popular: boolean

  @Column()
  unit: string

  @Column({name: 'sum_booking', nullable: true})
  sum_booking: number

  @ManyToOne(() => StaycationCategory, (category) => category.items, { nullable: true })
  @JoinColumn({name: 'category_id'})
  category: StaycationCategory

  @OneToMany(() => StaycationImage, (image) => image.item)
  @JoinColumn({name: 'image_ids'})
  images: StaycationImage[]

  @OneToMany(() => StaycationActivity, (activity) => activity.item)
  @JoinColumn({name: 'activity_ids'})
  activities: StaycationActivity[]
  
  @OneToMany(() => StaycationFeature, (feature) => feature.item)
  @JoinColumn({name: 'feature_ids'})
  features: StaycationFeature[]

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}