import { Module } from '@nestjs/common';
import { OtodyduckUsersController } from './users/users.controller';
import { OtodyduckUsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtodyduckUser } from './typeorm/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OtodyduckUser])],
  controllers: [OtodyduckUsersController],
  providers: [OtodyduckUsersService]
})
export class OtodyduckModule {}
