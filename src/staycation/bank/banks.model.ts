import { IsNotEmpty, IsString,  } from "class-validator"

export class RequestBankDTO {

  @IsNotEmpty()
  @IsString()
  bank_name: string

  @IsNotEmpty()
  @IsString()
  account_number: string

  @IsNotEmpty()
  @IsString()
  name: string
}