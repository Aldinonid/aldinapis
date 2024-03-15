import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OtodyduckUsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OtodyduckUser } from '../typeorm/entities/User.entity';
import { OtodyduckUserData } from '../users/users.model';
import { Message, Result } from 'src/utils/enums';
import { AuthJwtTokenData } from './auth.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>,
    private readonly userService: OtodyduckUsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email)
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async validateUserToken(token: string, email: string, isRefresh: boolean = false) {
    const user = await this.userService.findUserByEmail(email)
    if (user && isRefresh ? user.refreshToken === token : user.accessToken === token) {
      const {
        password, 
        refreshToken, 
        accessToken, 
        ...result
      } = user
      return result
    }
    return null
  }

  expiredTokenCheck = async (expDate: number) => (new Date(expDate * 1000) < new Date()) 
    ? new Result(Message.FAILED, Message.TOKEN_EXPIRED) 
    : null

  async login(user: OtodyduckUserData) {
    const payload: AuthJwtTokenData = {
      username: user.email,
      sub: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        job: user.job,
        avatar: user.avatar
      },
    }

    const accessToken = this.jwtService.sign(payload)
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' })

    await this.userRepository.update(user.id, {
      accessToken: accessToken,
      refreshToken: refreshToken
    })

    const result = {
      ...user,
      accessToken: accessToken,
      refreshToken: refreshToken
    }

    return new Result(Message.SUCCESS, result)
  }

  async logout(data: OtodyduckUserData) {
    const user = await this.userRepository.findOneBy({ id: data.id })
    if (!user) throw new HttpException(Message.USER_NOT_FOUND, HttpStatus.NOT_FOUND)

    await this.userRepository.update(user.id, {
      refreshToken: '',
      accessToken: ''
    })

    return new Result(Message.SUCCESS, Message.LOGOUT_SUCCESS)
  }

  async refreshToken(user: OtodyduckUserData) {
    const payload: AuthJwtTokenData = {
      username: user.email,
      sub: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        job: user.job,
        avatar: user.avatar
      },
    }

    const accessToken = this.jwtService.sign(payload)
    await this.userRepository.update(user.id, { accessToken: accessToken })

    return { accessToken: accessToken }
  }
  
}
