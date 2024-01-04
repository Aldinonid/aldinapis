import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDTO } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

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
