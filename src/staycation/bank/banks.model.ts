import { IsNotEmpty, IsString, IsUrl,  } from "class-validator"

export class RequestBankDTO {

  @IsNotEmpty()
  @IsString()
  bank_name: string

  @IsNotEmpty()
  @IsString()
  account_number: string

  @IsNotEmpty()
  @IsString()
  account_holder: string

  @IsNotEmpty()
  @IsUrl()
  image_url: string
}