import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckLesson } from '../typeorm/entities/Lesson.entity';
import { Repository } from 'typeorm';
import { RequestOtodyduckLessonDTO } from './lessons.model';
import { ResponseMessage, Result } from 'src/utils/enums';
import { OtodyduckChapter } from '../typeorm/entities/Chapter.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(OtodyduckLesson) private lessonRepository: Repository<OtodyduckLesson>,
    @InjectRepository(OtodyduckChapter) private chapterRepository: Repository<OtodyduckChapter>
  ) {}

  async getAllLessons() {
    const lessons = await this.lessonRepository.find({relations: ['chapter']})
    return new Result(ResponseMessage.SUCCESS, lessons)
  }

  async getLesson(id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ['chapter'] })
    if (!lesson) throw new HttpException(ResponseMessage.LESSON_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, lesson)
  }

  async createLesson(request: RequestOtodyduckLessonDTO) {
    const chapter = await this.chapterRepository.findOne({ where: { id: request.chapter_id } })
    if (!chapter) throw new HttpException(ResponseMessage.CHAPTER_NOT_FOUND, HttpStatus.NOT_FOUND)

    const lesson = this.lessonRepository.create(request)
    lesson.chapter = chapter

    const newLesson = await this.lessonRepository.save(lesson)
    return new Result(ResponseMessage.SUCCESS, newLesson)
  }

  async updateLesson(id: number, request: RequestOtodyduckLessonDTO) {
    const { chapter_id, ...lessonRequest } = request
    const lesson = await this.lessonRepository.findOne({ where: { id } })
    if (!lesson) throw new HttpException(ResponseMessage.LESSON_NOT_FOUND, HttpStatus.NOT_FOUND)

    const chapter = await this.chapterRepository.findOne({ where: { id: chapter_id } })
    if (!chapter) throw new HttpException(ResponseMessage.CHAPTER_NOT_FOUND, HttpStatus.NOT_FOUND)

    lesson.updatedAt = new Date()
    lesson.chapter = chapter
    Object.assign(lesson, lessonRequest)
    const updatedLesson = await this.lessonRepository.save(lesson)
    return new Result(ResponseMessage.SUCCESS, updatedLesson)
  }

  async deleteLesson(id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id } })
    if (!lesson) throw new HttpException(ResponseMessage.LESSON_NOT_FOUND, HttpStatus.NOT_FOUND)

    await this.lessonRepository.delete({ id })

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }
  
}
