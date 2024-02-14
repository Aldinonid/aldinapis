import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StaycationUsersService } from './users.service';
import { CreateStaycationUserDTO, UpdateStaycationUserDTO } from './users.model';

@Controller('users')
export class StaycationUsersController {
  constructor(private readonly userService: StaycationUsersService) {}

  @Get()
  async getUsers() {
    return this.userService.findUsers()
  }

  @Post()
  createUser(@Body() createUserDto: CreateStaycationUserDTO) {
    return this.userService.createUser(createUserDto)
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateStaycationUserDTO
  ) {
    await this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id)
  }
}
