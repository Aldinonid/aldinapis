import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckLesson } from '../typeorm/entities/Lesson.entity';
import { Repository } from 'typeorm';
import { RequestOtodyduckLessonDTO } from './lesson.model';
import { Message, Result } from 'src/utils/enums';
import { OtodyduckChapter } from '../typeorm/entities/Chapter.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(OtodyduckLesson) private lessonRepository: Repository<OtodyduckLesson>,
    @InjectRepository(OtodyduckChapter) private chapterRepository: Repository<OtodyduckChapter>
  ) {}

  async getAllLessons() {
    const lessons = await this.lessonRepository.find({relations: ['chapter']})
    return new Result(Message.SUCCESS, lessons)
  }

  async getLesson(id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ['chapter'] })
    if (!lesson) throw new NotFoundException(Message.LESSON_NOT_FOUND)

    return new Result(Message.SUCCESS, lesson)
  }

  async createLesson(request: RequestOtodyduckLessonDTO) {
    const chapter = await this.chapterRepository.findOne({ where: { id: request.chapter_id } })
    if (!chapter) throw new NotFoundException(Message.CHAPTER_NOT_FOUND)

    const lesson = this.lessonRepository.create({
      ...request,
      video_url: request.video,
      chapter: chapter
    })

    const newLesson = await this.lessonRepository.save(lesson)
    return new Result(Message.SUCCESS, newLesson)
  }

  async updateLesson(id: number, request: RequestOtodyduckLessonDTO) {
    const { chapter_id, video, ...lessonRequest } = request
    const lesson = await this.lessonRepository.findOne({ where: { id } })
    if (!lesson) throw new NotFoundException(Message.LESSON_NOT_FOUND)

    const chapter = await this.chapterRepository.findOne({ where: { id: chapter_id } })
    if (!chapter) throw new NotFoundException(Message.CHAPTER_NOT_FOUND)
    
    await this.lessonRepository.update(lesson.id, {
      ...lessonRequest,
      chapter: chapter,
      video_url: video
    })

    return new Result(Message.SUCCESS, await this.lessonRepository.findOneBy({ id }))
  }

  async deleteLesson(id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id } })
    if (!lesson) throw new NotFoundException(Message.LESSON_NOT_FOUND)

    await this.lessonRepository.delete({ id })

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
  
}
