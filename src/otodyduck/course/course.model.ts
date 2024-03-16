import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator"
import { OtodyduckLevel } from "src/utils/enums"

export enum CourseType {
  FREE = 'free',
  PREMIUM = 'premium'
}

export enum CourseStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}

export enum CourseCategory {
  DESIGN = 'design',
  DEVELOPMENT = 'development',
  SOFT_SKILL = 'soft skill'
}

export type ListCourseQueries = {
  q: string
  status: string
  category: string
  mentor_id: string
}

export class RequestOtodyduckCourseDTO {

  @IsNotEmpty()
  @IsString()
  name: string

  certificate: boolean

  @IsUrl()
  thumbnail: string

  @IsNotEmpty()
  @IsEnum(CourseType)
  type: CourseType

  @IsNotEmpty()
  @IsEnum(CourseStatus)
  status: CourseStatus

  @IsNumber()
  price: number

  @IsNotEmpty()
  @IsEnum(OtodyduckLevel)
  level: OtodyduckLevel

  @IsString()
  description: string

  @IsEnum(CourseCategory)
  category: CourseCategory

  @IsNumber()
  mentor_id: number
  
  tool_ids: number[]
}