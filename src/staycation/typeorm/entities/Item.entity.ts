import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @Column({name: 'sum_booking', default: 0})
  sum_booking: number

  @ManyToOne(() => StaycationCategory, (category) => category.id, { nullable: true })
  @JoinColumn({name: 'category_id'})
  category: StaycationCategory

  @ManyToMany(() => StaycationImage, (image) => image.items)
  @JoinTable({
    name: 'staycation_items_images',
    joinColumn: {
      name: 'item_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'image_id',
      referencedColumnName: 'id'
    }
  })
  images: StaycationImage[]

  @ManyToMany(() => StaycationActivity, (activity) => activity.items)
  @JoinTable({
    name: 'staycation_items_activities',
    joinColumn: {
      name: 'item_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'activity_id',
      referencedColumnName: 'id'
    }
  })
  activities: StaycationActivity[]
  
  @ManyToMany(() => StaycationFeature, (feature) => feature.items)
  @JoinTable({
    name: 'staycation_items_features',
    joinColumn: {
      name: 'item_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'feature_id',
      referencedColumnName: 'id'
    }
  })
  features: StaycationFeature[]

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}