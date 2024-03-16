import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RequestOtodyduckReviewDTO {
  @IsNotEmpty()
  @IsNumber()
  rating: number

  @IsNotEmpty()
  @IsString()
  note: string

  @IsNotEmpty()
  @IsNumber()
  course_id: number
}