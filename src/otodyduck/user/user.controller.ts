import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put, Request, UseGuards } from '@nestjs/common';
import { OtodyduckUserService } from './user.service';
import { OtodyduckUserRequest, UpdateOtodyduckUserDTO } from './user.model';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class OtodyduckUserController {
  constructor(private readonly userService: OtodyduckUserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAllUsers()
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUser(id)
  }

  @UseGuards(JwtGuard)
  @Put()
  updateUserById(
    @Body() updateUserDto: UpdateOtodyduckUserDTO,
    @Request() req: OtodyduckUserRequest
  ) {
    return this.userService.updateUser(req.user, updateUserDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id)
  }
}

