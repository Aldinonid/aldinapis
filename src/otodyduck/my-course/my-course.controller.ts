import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { MyCourseService } from './my-course.service';
import { RequestOtodyduckMyCourseDTO } from './my-course.model';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { OtodyduckUserRequest } from '../user/user.model';

@Controller('my-course')
export class MyCourseController {
  constructor(private readonly myCourseService: MyCourseService) {}

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
