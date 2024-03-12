import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { MyCoursesService } from './my-courses.service';
import { RequestOtodyduckMyCourseDTO } from './my-courses.model';

@Controller('my-courses')
export class MyCoursesController {
  constructor(private readonly myCourseService: MyCoursesService) {}

  @Get()
  getMyCourse() {
    return this.myCourseService.getMyCourse()
  }

  @Post()
  enrollCourse(
    @Headers('token') token: string,
    @Body() request: RequestOtodyduckMyCourseDTO
  ) {
    console.log(token)
    return this.myCourseService.enroll(request)
  }
  
}
