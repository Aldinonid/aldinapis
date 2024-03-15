import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckMyCourse } from '../typeorm/entities/MyCourse.entity';
import { Repository } from 'typeorm';
import { RequestOtodyduckMyCourseDTO } from './my-course.model';
import { Message, Result } from 'src/utils/enums';
import { OtodyduckUserData } from '../user/user.model';
import { OtodyduckUserService } from '../user/user.service';
import { CourseService } from '../course/course.service';

@Injectable()
export class MyCourseService {
  constructor(
    @InjectRepository(OtodyduckMyCourse) private myCourseRepository: Repository<OtodyduckMyCourse>,
    private readonly courseService: CourseService,
    private readonly userService: OtodyduckUserService
  ) {}

  async getMyCourse(data: OtodyduckUserData) {
    const myCourses = await this.myCourseRepository.find({ relations: ['user', 'course'] })
    const result = myCourses.filter((course) => course.user.id === data.id ).map((course) => course.course)

    return new Result(Message.SUCCESS, result)
  }

  async enroll(request: RequestOtodyduckMyCourseDTO, data: OtodyduckUserData) {
    const user = await this.userService.getUserId(data.id)
    const course = await this.courseService.getCourseById(request.course_id)
    const myCourse = this.myCourseRepository.create({ user: user, course: course })

    const createdMyCourse = await this.myCourseRepository.save(myCourse)
    
    return new Result(Message.SUCCESS, createdMyCourse)
  }
  
}
