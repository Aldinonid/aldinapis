export type CreateStaycationUserParams = {
  username: string
  password: string
}

export type UpdateStaycationUserParams = {
  username: string
  password: string
}

export type CreateStaycationUserProfileParams = {
  firstName: string
  lastName: string
  age: number
  dob: string
}

export type CreateStaycationUserPostParams = {
  title: string
  description: string
}

export class CreateStaycationUserDTO {
  username: string
  password: string
}

export class UpdateStaycationUserDTO {
  username: string
  password: string
}

export class CreateStaycationUserProfileDTO {
  firstName: string
  lastName: string
  age: number
  dob: string
}

export class CreateStaycationUserPostDTO {
  title: string
  description: string
}