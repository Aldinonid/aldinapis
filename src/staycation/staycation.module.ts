import { Module } from '@nestjs/common';
import { StaycationUserController } from './users/users.controller';
import { StaycationUserService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaycationUser } from 'src/staycation/typeorm/entities/User.entity';
import { LandingPageController } from './landing-page/landing-page.controller';
import { LandingPageService } from './landing-page/landing-page.service';
import { BankController } from './bank/banks.controller';
import { BankService } from './bank/banks.service';
import { StaycationBank } from './typeorm/entities/Bank.entity';
import { ActivityService } from './activity/activity.service';
import { ActivityController } from './activity/activity.controller';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { FeatureService } from './feature/feature.service';
import { FeatureController } from './feature/feature.controller';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { StaycationActivity } from './typeorm/entities/Activity.entity';
import { StaycationCategory } from './typeorm/entities/Category.entity';
import { StaycationFeature } from './typeorm/entities/Feature.entity';
import { StaycationItem } from './typeorm/entities/Item.entity';
import { StaycationImage } from './typeorm/entities/Image.entity';
import { ImageService } from './image/image.service';
import { ImageController } from './image/image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    StaycationUser,
    StaycationBank,
    StaycationActivity,
    StaycationCategory,
    StaycationFeature,
    StaycationItem,
    StaycationImage
  ])],
  providers: [
    StaycationUserService, 
    LandingPageService, 
    BankService, 
    ActivityService, 
    CategoryService, 
    FeatureService, 
    ItemService, ImageService
  ],
  controllers: [
    StaycationUserController, 
    LandingPageController, 
    BankController, 
    ActivityController, 
    CategoryController, 
    FeatureController, 
    ItemController, ImageController
  ],
})
export class StaycationModule {}
