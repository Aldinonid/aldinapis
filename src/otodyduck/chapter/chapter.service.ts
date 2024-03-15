import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckChapter } from '../typeorm/entities/Chapter.entity';
import { Repository } from 'typeorm';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';
import { Message, Result } from 'src/utils/enums';
import { RequestOtodyduckChapterDTO } from './chapter.model';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(OtodyduckChapter) private chapterRepository: Repository<OtodyduckChapter>,
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
  ) {}

  async getAllChapters() {
    const chapters = await this.chapterRepository.find()
    return new Result(Message.SUCCESS, chapters)
  }

  async getChapter(id: number) {
    const chapter = await this.chapterRepository.findOne({ where: { id } })
    if (!chapter) throw new NotFoundException(Message.CHAPTER_NOT_FOUND)

    return new Result(Message.SUCCESS, chapter)
  }

  async createChapter(request: RequestOtodyduckChapterDTO) {
    const course = await this.courseRepository.findOne({ where: { id: request.course_id } })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)

    const chapter = this.chapterRepository.create(request)
    chapter.course = course

    const newChapter = await this.chapterRepository.save(chapter)
    return new Result(Message.SUCCESS, newChapter)
  }

  async updateChapter(id: number, request: RequestOtodyduckChapterDTO) {
    const { course_id, ...chapterRequest } = request
    const chapter = await this.chapterRepository.findOne({ where: { id } })
    if (!chapter) throw new NotFoundException(Message.CHAPTER_NOT_FOUND)

    const course = await this.courseRepository.findOne({ where: { id: course_id } })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)

    chapter.updatedAt = new Date()
    chapter.course = course
    Object.assign(chapter, chapterRequest)
    const updatedChapter = await this.chapterRepository.save(chapter)
    return new Result(Message.SUCCESS, updatedChapter)
  }

  async deleteChapter(id: number) {
    const chapter = await this.chapterRepository.findOne({ where: { id } })
    if (!chapter) throw new NotFoundException(Message.CHAPTER_NOT_FOUND)

    await this.chapterRepository.delete({ id })
    
    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
  
}
