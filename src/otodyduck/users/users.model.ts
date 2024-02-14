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
