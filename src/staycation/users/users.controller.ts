import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StaycationUserService } from './users.service';
import { CreateStaycationUserDTO, UpdateStaycationUserDTO } from './users.model';

@Controller('user')
export class StaycationUserController {
  constructor(private readonly userService: StaycationUserService) {}

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
