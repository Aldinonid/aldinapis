import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { OtodyduckUsersService } from './users.service';
import { CreateOtodyduckUserDTO, LoginOtodyduckUserParams, OtodyduckUserRequest, UpdateOtodyduckUserDTO } from './users.model';
import { AuthGuard } from '../../auth/auth.guard';

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
  @HttpCode(HttpStatus.OK)
  login(@Body() createUserDto: LoginOtodyduckUserParams) {
    return this.userService.login(createUserDto)
  }

  @UseGuards(AuthGuard)
  @Post('/logout')
  logout(@Request() req: OtodyduckUserRequest) {
    return this.userService.logout(req.user)
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
