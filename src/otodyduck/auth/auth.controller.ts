import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OtodyduckUserService } from '../user/user.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateOtodyduckUserDTO, OtodyduckUserRequest } from '../user/user.model';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { JwtGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: OtodyduckUserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: OtodyduckUserRequest) {
    return await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() request: CreateOtodyduckUserDTO) {
    return this.userService.register(request)
  }

  @UseGuards(RefreshJwtGuard)
  @Get('refresh')
  async refreshToken(@Request() req: OtodyduckUserRequest) {
    return this.authService.refreshToken(req.user)
  }
  
  @UseGuards(JwtGuard)
  @Post('logout')
  logout(@Request() req: OtodyduckUserRequest) {
    return this.authService.logout(req.user)
  }
  
}
