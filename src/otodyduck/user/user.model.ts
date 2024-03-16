import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUrl } from "class-validator"
import { OtodyduckUserRole } from "../typeorm/entities/User.entity"

export class UpdateOtodyduckUserDTO {

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  password: string

  @IsString()
  job: string

  @IsNotEmpty()
  @IsEnum(OtodyduckUserRole)
  role: OtodyduckUserRole

  @IsUrl()
  avatar: string
}

export class LoginOtodyduckUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}

export class RequestOtodyduckUserDTO {

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsString()
  job: string

  @IsNotEmpty()
  @IsEnum(OtodyduckUserRole)
  role: OtodyduckUserRole

  @IsUrl()
  avatar?: string
}

export class OtodyduckUserData {
  id: number
  name: string
  email: string
  role: string
  job: string
  avatar: string
  created_at: string
  updated_at: string
  refreshToken: string
}

export class OtodyduckUserRequest {
  user: OtodyduckUserData
}