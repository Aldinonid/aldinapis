import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOtodyduckUserParams, LoginOtodyduckUserParams, UpdateOtodyduckUserParams } from './users.model';
import { OtodyduckUser } from '../typeorm/entities/User.entity';
import * as bcrypt from 'bcrypt';
import { Status } from 'src/utils/enums';

@Injectable()
export class OtodyduckUsersService {
  constructor(
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>,
  ) {}

  async findAllUsers() {
    const users = await this.userRepository.find({select: ['id', 'avatar', 'name', 'avatar', 'role', 'job', 'createdAt', 'updatedAt']})
    return {
      status: Status.SUCCESS,
      data: users
    }
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id: id })
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)

    return {
      status: Status.SUCCESS,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    }
  }

  async register(userDetail: CreateOtodyduckUserParams) {
    const newUser = this.userRepository.create(userDetail)
    const isEmailExist = await this.userRepository.findOne({where: { email: userDetail.email }})
    if (isEmailExist) throw new HttpException('Email already exists', HttpStatus.CONFLICT)
    const createdUser = await this.userRepository.save(newUser)

    return {
      status: Status.SUCCESS,
      data: {
        id: createdUser.id
      }
    }
  }

  async login(request: LoginOtodyduckUserParams) {
    const user = await this.userRepository.findOne({where: {email: request.email}})
    const isPasswordValid = await bcrypt.compare(request.password, user?.password ?? '')

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    if (!isPasswordValid) throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED)

    return {
      status: Status.SUCCESS,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    }
  }

  async logout(id: number) {
    const user = await this.userRepository.findOneBy({id: id})
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)

    return {
      status: Status.SUCCESS,
      message: 'Log Out Successfully'
    }
  }

  updateUser(id: number, userDetail: UpdateOtodyduckUserParams) {
    return this.userRepository.update({ id }, { ...userDetail })
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id })
  }

}
