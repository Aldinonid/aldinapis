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
  name: string
  certificate: boolean
  thumbnail: string
  type: CourseType
  status: CourseStatus
  price: number
  level: OtodyduckLevel
  description: string
  category: CourseCategory
  mentor_id: number
  tool_ids: number[]
}