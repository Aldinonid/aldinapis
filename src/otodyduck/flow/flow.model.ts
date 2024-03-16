import { IsEnum, IsNotEmpty, IsString, IsUrl } from "class-validator"
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

  course_ids: number[]
}