import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class RequestOtodyduckLessonDTO {

  @IsNotEmpty()
  name: string

  @IsString()
  video: string

  @IsNumber()
  chapter_id: number
}