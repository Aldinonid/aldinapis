import { IsNotEmpty } from "class-validator"

export type CreateUserParams = {
  username: string
  password: string
}

export type UpdateUserParams = {
  username: string
  password: string
}

export type CreateUserProfileParams = {
  firstName: string
  lastName: string
  age: number
  dob: string
}

export type CreateUserPostParams = {
  title: string
  description: string
}

export class CreateUserDto {

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string
}

export class UpdateUserDTO {
  username: string
  password: string
}

export class CreateUserProfileDTO {
  firstName: string
  lastName: string
  age: number
  dob: string
}

export class CreateUserPostDTO {
  title: string
  description: string
}