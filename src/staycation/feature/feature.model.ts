import { IsInt, IsNotEmpty, IsNumber, IsUrl } from "class-validator"

export class RequestFeatureDTO {

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsNumber()
  qty: number

  @IsNotEmpty()
  @IsUrl()
  image_url: string
}