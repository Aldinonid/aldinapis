import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateOtodyduckUserParams, LoginOtodyduckUserParams, UpdateOtodyduckUserParams } from './users.model';
import { OtodyduckUser } from '../typeorm/entities/User.entity';
import * as bcrypt from 'bcrypt';
import { ResponseMessage, Result } from 'src/utils/enums';

@Injectable()
export class OtodyduckUsersService {
  constructor(
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>,
  ) {}

  async findAllUsers() {
    const users = await this.userRepository.find({select: ['id', 'avatar', 'name', 'avatar', 'role', 'job', 'createdAt', 'updatedAt']})

    return new Result(ResponseMessage.SUCCESS, users)
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new HttpException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(
      ResponseMessage.SUCCESS, 
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    )
  }

  async register(request: CreateOtodyduckUserParams) {
    const newUser = this.userRepository.create(request)
    const isEmailExist = await this.userRepository.findOne({where: { email: request.email }})
    if (isEmailExist) throw new HttpException(ResponseMessage.EMAIL_EXIST, HttpStatus.CONFLICT)
    const createdUser = await this.userRepository.save(newUser)

    return new Result(ResponseMessage.SUCCESS, {id: createdUser.id})
  }

  async login(request: LoginOtodyduckUserParams) {
    const user = await this.userRepository.findOne({where: {email: request.email}})
    if (!user) throw new HttpException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND)

    const isPasswordValid = await bcrypt.compare(request.password, user.password)
    if (!isPasswordValid) throw new HttpException(ResponseMessage.INVALID_PASSWORD, HttpStatus.UNAUTHORIZED)

    return new Result(
      ResponseMessage.SUCCESS,
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    )
  }

  async logout(id: number) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new HttpException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.LOGOUT_SUCCESS)
  }

  async updateUser(id: number, request: UpdateOtodyduckUserParams) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new HttpException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND)

    const isEmailExist = await this.userRepository.findOne({
      where: {
        email: user.email,
        id: Not(user.id)
      }
    })
    if (isEmailExist) throw new HttpException(ResponseMessage.EMAIL_EXIST, HttpStatus.CONFLICT)

    if (request.password) request.password = await bcrypt.hash(request.password, 10)
    user.updatedAt = new Date()
    Object.assign(user, request)

    await this.userRepository.save(user)

    return new Result(
      ResponseMessage.SUCCESS, 
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    )
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new HttpException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND)
    await this.userRepository.delete({ id })

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }

}
