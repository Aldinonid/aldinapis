import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { RequestOtodyduckLessonDTO } from './lessons.model';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonService: LessonsService) {}

  @Get()
  getAllLessons() {
    return this.lessonService.getAllLessons()
  }

  @Get(':id')
  getLesson(@Param('id', ParseIntPipe) id: number) {
    return this.lessonService.getLesson(id)
  }
  
  @Post()
  createLesson(@Body() request: RequestOtodyduckLessonDTO) {
    return this.lessonService.createLesson(request)
  }

  @Put(':id')
  updateLesson(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckLessonDTO
  ) {
    return this.lessonService.updateLesson(id, request)
  }

  @Delete(':id')
  deleteLesson(@Param('id', ParseIntPipe) id: number) {
    return this.lessonService.deleteLesson(id)
  }
}
