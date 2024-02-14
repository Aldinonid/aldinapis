import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaycationUserParams, UpdateStaycationUserParams } from './users.model';
import { StaycationUser } from 'src/staycation/typeorm/entities/User.entity';

@Injectable()
export class StaycationUsersService {
  constructor(
    @InjectRepository(StaycationUser) private userRepository: Repository<StaycationUser>,
  ) {}

  findUsers() {
    return this.userRepository.find({ relations: ['profile', 'posts'] })
  }

  async createUser(userDetail: CreateStaycationUserParams) {
    const newUser = this.userRepository.create(userDetail)
    return this.userRepository.save(newUser)
  }

  updateUser(id: number, userDetail: UpdateStaycationUserParams) {
    return this.userRepository.update({ id }, { ...userDetail })
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id })
  }

}
