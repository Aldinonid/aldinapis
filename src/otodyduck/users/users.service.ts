import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateOtodyduckUserParams, OtodyduckUserData, UpdateOtodyduckUserParams } from './users.model';
import { OtodyduckUser } from '../typeorm/entities/User.entity';
import * as bcrypt from 'bcrypt';
import { Message, Result } from 'src/utils/enums';

@Injectable()
export class OtodyduckUsersService {
  constructor(
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>
  ) {}

  async findAllUsers() {
    const users = await this.userRepository.find()

    return new Result(Message.SUCCESS, users)
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)

    return new Result(Message.SUCCESS, user)
  }

  async getUserId(id: number): Promise<OtodyduckUser> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)
    return user
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository
      .createQueryBuilder('otodyduck_users')
      .where('otodyduck_users.email = :email', { email: email })
      .addSelect([
        'otodyduck_users.password',
        'otodyduck_users.refreshToken',
        'otodyduck_users.accessToken'
      ])
      .getOne()
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)

    return user
  }

  async fetchUser(data: OtodyduckUserData) {
    const user = await this.userRepository.findOneBy({ id: data.id })
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)

    return new Result(Message.SUCCESS, user)
  }

  async register(request: CreateOtodyduckUserParams) {
    const newUser = this.userRepository.create(request)
    const isEmailExist = await this.userRepository.findOne({where: { email: request.email }})
    if (isEmailExist) throw new ConflictException(Message.EMAIL_EXIST)
    const { password, ...createdUser } = await this.userRepository.save(newUser)

    return new Result(Message.SUCCESS, createdUser)
  }

  async updateUser(data: OtodyduckUserData, request: UpdateOtodyduckUserParams) {
    const user = await this.userRepository.findOneBy({ id: data.id })
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)

    const isEmailExist = await this.userRepository.findOne({
      where: {
        email: user.email,
        id: Not(user.id)
      }
    })
    if (isEmailExist) throw new ConflictException(Message.EMAIL_EXIST)

    if (request.password) request.password = await bcrypt.hash(request.password, 10)
    user.updatedAt = new Date()
    Object.assign(user, request)

    await this.userRepository.save(user)

    return new Result(Message.SUCCESS, user)
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)
    await this.userRepository.delete({ id })

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }

}
