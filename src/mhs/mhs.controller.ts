import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { MhsService } from './mhs.service';
import { LoginUserDTO } from './mhs.model';

@Controller('mhs')
export class MhsController {
  constructor(private readonly userService: MhsService) {}

  @Get()
  @HttpCode(200)
  getUser() {
    return {
      response_status: "SUCCESS",
      data: this.userService.getUser()
    }
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() payload: LoginUserDTO) {
    console.log(payload);
    return {
      response_status: "SUCCESS",
      data: this.userService.getUser()
    }
  }
}
