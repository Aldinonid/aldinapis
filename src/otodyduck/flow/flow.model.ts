import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator"
import { OtodyduckLevel } from "src/utils/enums"

export class RequestOtodyduckFlowDTO {

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEnum(OtodyduckLevel)
  level: OtodyduckLevel

  @IsUrl()
  image: string

  @IsOptional()
  course_ids: number[]
}