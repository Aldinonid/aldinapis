import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { RequestOtodyduckChapterDTO } from './chapters.model';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chapterService: ChaptersService) {}

  @Get()
  getAllChapters() {
    return this.chapterService.getAllChapters()
  }

  @Get(':id')
  getChapter(@Param('id', ParseIntPipe) id: number) {
    return this.chapterService.getChapter(id)
  }

  @Post()
  createChapter(@Body() request: RequestOtodyduckChapterDTO) {
    return this.chapterService.createChapter(request)
  }

  @Put(':id')
  updateChapter(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckChapterDTO
  ) {
    return this.chapterService.updateChapter(id, request)
  }

  @Delete(':id')
  deleteChapter(@Param('id', ParseIntPipe) id: number) {
    return this.chapterService.deleteChapter(id)
  }
  
}
