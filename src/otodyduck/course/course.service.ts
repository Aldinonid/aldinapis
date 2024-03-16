import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';
import { In, Not, Repository } from 'typeorm';
import { CourseType, ListCourseQueries, RequestOtodyduckCourseDTO } from './course.model';
import { Message, Result } from 'src/utils/enums';
import { OtodyduckReview } from '../typeorm/entities/Review.entity';
import { OtodyduckTool } from '../typeorm/entities/Tool.entity';
import { lowerCaseCompare, slugify } from 'src/utils/commons';
import { OtodyduckUser } from '../typeorm/entities/User.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
    @InjectRepository(OtodyduckReview) private reviewRepository: Repository<OtodyduckReview>,
    @InjectRepository(OtodyduckTool) private toolRepository: Repository<OtodyduckTool>,
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>,
  ) {}

  async getAllCourses(query?: ListCourseQueries) {
    let courses = this.courseRepository.createQueryBuilder('otodyduck_courses')

    if (query?.q) {
      courses.where('otodyduck_courses.name LIKE :name', {name: `%${query.q}%`})
    }
    if (query?.status) {
      courses.where('otodyduck_courses.status = :status', {status: query.status})
    }
    if (query?.mentor_id) {
      courses.where('otodyduck_courses.user = :user', {user: query.mentor_id})
    }
    if (query?.category) {
      courses.where('otodyduck_courses.category = :category', {category: query.category})
    }

    const courseResult = await courses
      .leftJoinAndSelect('otodyduck_courses.user', 'otodyduck_users')
      .getMany()

    return new Result(Message.SUCCESS, courseResult)
  }

  async getCourse(id: number) {
    const course = await this.courseRepository.findOne({ 
      where: { id }, 
      relations: ['review' ,'tools', 'user']
    })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)

    return new Result(Message.SUCCESS, course)
  }

  async getCourseById(id: number): Promise<OtodyduckCourse> {
    const course = await this.courseRepository.findOneBy({ id })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)
    return course
  }

  async createCourse(request: RequestOtodyduckCourseDTO) {
    const { mentor_id, tool_ids, ...courseRequest } = request
    const isNameExist = await this.courseRepository.findOne({ where: { name: courseRequest.name }})
    if (isNameExist) throw new ConflictException(Message.NAME_EXIST)

    const mentor = await this.userRepository.findOne({ where: { id: mentor_id } })
    if (!mentor) throw new NotFoundException(Message.USER_NOT_FOUND)

    if (courseRequest.price === 0 && courseRequest.type === CourseType.PREMIUM) 
      throw new BadRequestException(Message.COURSE_NOT_HAVE_PRICE)

    const tools = await this.toolRepository.findBy({ id: In(tool_ids) })

    const course = this.courseRepository.create({ 
      ...courseRequest,
      slug: slugify(courseRequest.name),
      user: mentor,
      tools: tools
    })

    const createdCourse = await this.courseRepository.save(course)

    return new Result(Message.SUCCESS, createdCourse)
  }

  async updateCourse(id: number, request: RequestOtodyduckCourseDTO) {
    const { tool_ids, mentor_id, ...courseRequest} = request
    const course = await this.courseRepository.findOne({ where: { id } })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)

    const mentor = await this.userRepository.findOne({ where: { id: mentor_id } })
    if (!mentor) throw new NotFoundException(Message.USER_NOT_FOUND)

    const allCourseName = (await this.courseRepository.find({ where: { id: Not(id) } })).map((course) => course.name)
    allCourseName.forEach((name: string) => {
      if (lowerCaseCompare(courseRequest.name, name)) 
        throw new ConflictException(Message.COURSE_NAME_EXIST)
    })

    const tools = await this.toolRepository.findBy({ id: In(tool_ids) })

    course.updated_at = new Date()
    course.slug = slugify(courseRequest.name)
    course.user = mentor
    course.tools = tools

    Object.assign(course, courseRequest)

    const updatedCourse = await this.courseRepository.save(course)
    return new Result(Message.SUCCESS, updatedCourse)
  }

  async deleteCourse(id: number) {
    const course = await this.courseRepository.findOne({ where: { id } })
    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)

    await this.courseRepository.delete({ id })

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
