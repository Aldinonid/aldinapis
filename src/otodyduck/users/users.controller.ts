import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { OtodyduckUsersService } from './users.service';
import { CreateOtodyduckUserDTO, LoginOtodyduckUserParams, UpdateOtodyduckUserDTO } from './users.model';

@Controller('users')
export class OtodyduckUsersController {
  constructor(private readonly userService: OtodyduckUsersService) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAllUsers()
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUser(id)
  }

  @Post('/register')
  register(@Body() request: CreateOtodyduckUserDTO) {
    return this.userService.register(request)
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() createUserDto: LoginOtodyduckUserParams) {
    return this.userService.login(createUserDto)
  }

  @Post('/logout')
  logout(@Body('id', ParseIntPipe) id: number) {
    return this.userService.logout(id)
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateOtodyduckUserDTO
  ) {
    await this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id)
  }
}
