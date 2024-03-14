import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { MyCoursesService } from './my-courses.service';
import { RequestOtodyduckMyCourseDTO } from './my-courses.model';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { OtodyduckUserRequest } from '../users/users.model';

@Controller('my-courses')
export class MyCoursesController {
  constructor(private readonly myCourseService: MyCoursesService) {}

  @UseGuards(JwtGuard)
  @Get()
  getMyCourse(@Request() req: OtodyduckUserRequest) {
    return this.myCourseService.getMyCourse(req.user)
  }

  @UseGuards(JwtGuard)
  @Post()
  enrollCourse(
    @Body() request: RequestOtodyduckMyCourseDTO,
    @Request() req: OtodyduckUserRequest
  ) {
    return this.myCourseService.enroll(request, req.user)
  }
  
}
