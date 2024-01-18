import { IsEmail, IsNotEmpty } from "class-validator"

export class MhsModel {
  constructor(
    public username: string,
    public profile_picture: string,
    public student_name: string,
    public student_number: number,
    public profession: string,
    public semester: number,
    public ipk: number,
    public favorite_major: string[],
    public hobby: string[]
  ) {}
}

export class LoginUserDTO {
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}