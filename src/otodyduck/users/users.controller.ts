import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put } from '@nestjs/common';
import { OtodyduckUsersService } from './users.service';
import { UpdateOtodyduckUserDTO } from './users.model';

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

  @Put(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateOtodyduckUserDTO
  ) {
    return this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id)
  }
}
