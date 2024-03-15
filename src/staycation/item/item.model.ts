import { IsNotEmpty, IsNumber } from "class-validator"

export class RequestItemDTO {

  @IsNotEmpty()
  title: string
  
  @IsNotEmpty()
  price: number

  @IsNotEmpty()
  city: string

  @IsNotEmpty()
  about: string

  @IsNotEmpty()
  country: string

  @IsNotEmpty()
  unit: string
  
  @IsNotEmpty()
  is_popular: boolean
  
  category_id: number
  sum_booking: number
  image_ids: number[]
  activity_ids: number[]
  feature_ids: number[]
}