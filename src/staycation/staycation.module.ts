import { Module } from '@nestjs/common';
import { StaycationUsersController } from './users/users.controller';
import { StaycationUsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaycationUser } from 'src/staycation/typeorm/entities/User.entity';
import { LandingPageController } from './landing-page/landing-page.controller';
import { LandingPageService } from './landing-page/landing-page.service';

@Module({
  imports: [TypeOrmModule.forFeature([StaycationUser])],
  providers: [StaycationUsersService, LandingPageService],
  controllers: [StaycationUsersController, LandingPageController],
})
export class StaycationModule {}
