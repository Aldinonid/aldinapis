import { Module } from '@nestjs/common';
import { OtodyduckUsersController } from './users/users.controller';
import { OtodyduckUsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtodyduckUser } from './typeorm/entities/User.entity';
import { FlowsService } from './flows/flows.service';
import { FlowsController } from './flows/flows.controller';
import { OtodyduckFlow } from './typeorm/entities/Flow.entity';
import { OtodyduckTool } from './typeorm/entities/Tool.entity';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { OtodyduckCourse } from './typeorm/entities/Course.entity';
import { ChaptersService } from './chapters/chapters.service';
import { ChaptersController } from './chapters/chapters.controller';
import { LessonsController } from './lessons/lessons.controller';
import { LessonsService } from './lessons/lessons.service';
import { ReviewsService } from './reviews/reviews.service';
import { ReviewsController } from './reviews/reviews.controller';
import { OtodyduckChapter } from './typeorm/entities/Chapter.entity';
import { OtodyduckReview } from './typeorm/entities/Review.entity';
import { OtodyduckLesson } from './typeorm/entities/Lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    OtodyduckUser, 
    OtodyduckFlow, 
    OtodyduckTool,
    OtodyduckCourse,
    OtodyduckChapter,
    OtodyduckReview,
    OtodyduckLesson
  ])],
  controllers: [
    OtodyduckUsersController, 
    FlowsController, 
    ToolsController, 
    CoursesController, 
    ChaptersController, 
    LessonsController, 
    ReviewsController
  ],
  providers: [
    OtodyduckUsersService, 
    FlowsService, 
    ToolsService, 
    CoursesService, 
    ChaptersService, 
    LessonsService, 
    ReviewsService
  ]
})
export class OtodyduckModule {}
