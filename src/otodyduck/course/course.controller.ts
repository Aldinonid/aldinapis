import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { ListCourseQueries, RequestOtodyduckCourseDTO } from './course.model';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(@Query() query: ListCourseQueries) {
    return this.courseService.getAllCourses(query)
  }

  @Get(':id')
  getCourse(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.getCourse(id)
  }

  @Post()
  createCourse(@Body() request: RequestOtodyduckCourseDTO) {
    return this.courseService.createCourse(request)
  }

  @Put(':id')
  updateCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckCourseDTO
  ) {
    return this.courseService.updateCourse(id, request)
  }

  @Delete(':id')
  deleteCourse(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.deleteCourse(id)
  }
}
