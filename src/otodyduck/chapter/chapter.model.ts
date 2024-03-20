import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class RequestOtodyduckChapterDTO {

  @IsNotEmpty()
  name: string

  @IsOptional()
  @IsNumber()
  course_id: number
}