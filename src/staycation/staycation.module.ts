import { Module } from '@nestjs/common';
import { StaycationUsersController } from './users/users.controller';
import { StaycationUsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaycationUser } from 'src/staycation/typeorm/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaycationUser])],
  providers: [StaycationUsersService],
  controllers: [StaycationUsersController],
})
export class StaycationModule {}
