import { IsNotEmpty, IsUrl } from "class-validator";

export class RequestImageDTO {

  @IsUrl()
  @IsNotEmpty()
  image_url: string
}