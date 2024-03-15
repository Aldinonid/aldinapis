import { ArrayContains, IsNotEmpty } from "class-validator"

export class RequestCategoryDTO {

  @IsNotEmpty()
  name: string
  
  item_ids: number[]
}