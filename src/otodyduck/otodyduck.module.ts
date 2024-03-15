import { Module } from '@nestjs/common';
import { OtodyduckUserController } from './user/user.controller';
import { OtodyduckUserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtodyduckUser } from './typeorm/entities/User.entity';
import { FlowService } from './flow/flow.service';
import { FlowsController } from './flow/flow.controller';
import { OtodyduckFlow } from './typeorm/entities/Flow.entity';
import { OtodyduckTool } from './typeorm/entities/Tool.entity';
import { ToolController } from './tool/tool.controller';
import { ToolService } from './tool/tool.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { OtodyduckCourse } from './typeorm/entities/Course.entity';
import { ChapterService } from './chapter/chapter.service';
import { ChapterController } from './chapter/chapter.controller';
import { LessonsController } from './lesson/lesson.controller';
import { LessonService } from './lesson/lesson.service';
import { ReviewService } from './review/review.service';
import { ReviewController } from './review/review.controller';
import { OtodyduckChapter } from './typeorm/entities/Chapter.entity';
import { OtodyduckReview } from './typeorm/entities/Review.entity';
import { OtodyduckLesson } from './typeorm/entities/Lesson.entity';
import { OtodyduckMyCourse } from './typeorm/entities/MyCourse.entity';
import { FrontPageController } from './landing-page/landing-page.controller';
import { FrontPageService } from './landing-page/landing-page.service';
import { MyCourseService } from './my-course/my-course.service';
import { MyCourseController } from './my-course/my-course.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/strategies/local-strategy';
import { JwtStrategy } from './auth/strategies/jwt-strategy';
import { RefreshJwtStrategy } from './auth/strategies/refreshToken.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OtodyduckUser, 
      OtodyduckFlow, 
      OtodyduckTool,
      OtodyduckCourse,
      OtodyduckChapter,
      OtodyduckReview,
      OtodyduckLesson,
      OtodyduckMyCourse
    ])
  ],
  controllers: [
    OtodyduckUserController, 
    FlowsController, 
    ToolController, 
    CourseController, 
    ChapterController, 
    LessonsController, 
    ReviewController, 
    FrontPageController, 
    MyCourseController, 
    AuthController
  ],
  providers: [
    OtodyduckUserService, 
    FlowService, 
    ToolService, 
    CourseService, 
    ChapterService, 
    LessonService, 
    ReviewService, 
    FrontPageService, 
    MyCourseService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy
  ]
})
export class OtodyduckModule {}
