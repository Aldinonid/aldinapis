import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from './users.model';
import { Profile } from 'src/typeorm/entities/profile.entity';
import { Post } from 'src/typeorm/entities/posts.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>
  ) {}

  findUsers() {
    return this.userRepository.find({ 
      relations: ['profile', 'posts'], 
      select: ['id', 'username', 'createdAt', 'profile', 'posts'] 
    })
  }

  async createUser(userDetail: CreateUserParams) {
    const encryptedPassword  = await bcrypt.hash(userDetail.password, 10)
    const newUser = this.userRepository.create({
      ...userDetail,
      password: encryptedPassword,
      createdAt: new Date()
    })
    return this.userRepository.save(newUser)
  }

  updateUser(id: number, userDetail: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...userDetail })
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id })
  }

  async createUserProfile(id: number, profileDetail: CreateUserProfileParams) {
    const user = await this.userRepository.findOneBy( { id })
    if (!user) throw new HttpException("User not found. Cannot create Profile", HttpStatus.BAD_REQUEST)
    const newProfile = this.profileRepository.create(profileDetail)
    const saveProfile = await this.profileRepository.save(newProfile)
    user.profile = saveProfile
    return this.userRepository.save(user)
  }

  async createUserPost(id: number, postDetail: CreateUserPostParams) {
    const user = await this.userRepository.findOneBy( { id })
    if (!user) throw new HttpException("User not found. Cannot create Post", HttpStatus.BAD_REQUEST)
    const newPost = this.postRepository.create({
      ...postDetail, 
      user: user
    })
    return this.postRepository.save(newPost)
  }
}
