import { OtodyduckUserRole } from "../typeorm/entities/User.entity"

export type CreateOtodyduckUserParams = {
  name: string
  email: string
  password: string
  job?: string
  avatar?: string
  role?: OtodyduckUserRole
}

export type LoginOtodyduckUserParams = {
  email: string
  password: string
}

export type UpdateOtodyduckUserParams = {
  name: string
  email: string
  password?: string
  role: OtodyduckUserRole
  job?: string
  avatar?: string
}

export class CreateOtodyduckUserDTO {
  name: string
  email: string
  password: string
  job?: string
}

export class UpdateOtodyduckUserDTO {
  name: string
  email: string
  password?: string
  role: OtodyduckUserRole
  job?: string
  avatar?: string
}

export class OtodyduckUserData {
  id: number
  name: string
  email: string
  role: string
  avatar: string
  createdAt: string
  updatedAt: string
  iat: number
  exp: number
}

export class OtodyduckUserRequest {
  user: OtodyduckUserData
}