import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { Profile } from 'src/typeorm/entities/profile.entity';
import { Post } from 'src/typeorm/entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
