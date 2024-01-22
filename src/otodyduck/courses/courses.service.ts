import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';
import { Repository } from 'typeorm';
import { CourseType, ListCourseQueries, RequestOtodyduckCourseDTO } from './courses.model';
import { ResponseMessage, Result } from 'src/utils/enums';
import { OtodyduckReview } from '../typeorm/entities/Review.entity';
import { OtodyduckTool } from '../typeorm/entities/Tool.entity';
import { slugify } from 'src/utils/commons';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
    @InjectRepository(OtodyduckReview) private reviewRepository: Repository<OtodyduckReview>,
    @InjectRepository(OtodyduckTool) private toolRepository: Repository<OtodyduckTool>,
  ) {}

  async getAllCourses(query?: ListCourseQueries) {
    let courses = this.courseRepository.createQueryBuilder()

    if (query?.q) {
      courses.where('name LIKE :name', {name: `%${query.q}%`}).getMany()
    }
    if (query?.status) {
      courses.where('status = :status', {status: query.status}).getMany()
    }
    if (query?.mentorId) {
      courses.where('mentorId = :mentorId', {mentorId: query.mentorId}).getMany()
    }
    if (query?.category) {
      courses.where('category = :category', {category: query.category}).getMany()
    }

    console.log(courses);

    return new Result(ResponseMessage.SUCCESS, courses)
  }

  async getCourse(id: number) {
    const course = await this.courseRepository.findOne({ 
      where: { id: id }, 
      relations: { review: true, tools: true, userId: true } 
    })
    if (!course) throw new HttpException(ResponseMessage.COURSE_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, course)
  }

  async createCourse(request: RequestOtodyduckCourseDTO) {
    const isNameExist = await this.courseRepository.findOne({ where: { name: request.name }})
    if (isNameExist) throw new HttpException(ResponseMessage.NAME_EXIST, HttpStatus.CONFLICT)

    const course = this.courseRepository.create(request)
    if (request.price === 0 && request.type === CourseType.PREMIUM) throw new HttpException(
      ResponseMessage.COURSE_NOT_HAVE_PRICE, 
      HttpStatus.BAD_REQUEST
    )

    course.slug = slugify(request.name)

    const createdCourse = await this.courseRepository.save(course)

    return new Result(ResponseMessage.SUCCESS, createdCourse)
  }

  async updateCourse(id: number, request: RequestOtodyduckCourseDTO) {

  }

  async deleteCourse(id: number) {

  }
}
