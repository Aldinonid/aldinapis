import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class RequestActivityDTO {

  @IsNotEmpty()
  name: string
  
  @IsNotEmpty()
  type: string

  @IsNotEmpty()
  image_url: string
}