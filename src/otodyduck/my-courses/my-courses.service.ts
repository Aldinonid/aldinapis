import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckMyCourse } from '../typeorm/entities/MyCourse.entity';
import { Repository } from 'typeorm';
import { RequestOtodyduckMyCourseDTO } from './my-courses.model';
import { ResponseMessage, Result } from 'src/utils/enums';

@Injectable()
export class MyCoursesService {
  constructor(
    @InjectRepository(OtodyduckMyCourse) private myCourseRepository: Repository<OtodyduckMyCourse>
  ) {}

  async getMyCourse() {
    return new Result(ResponseMessage.SUCCESS, {})
  }

  async enroll(request: RequestOtodyduckMyCourseDTO) {
    return new Result(ResponseMessage.SUCCESS, {})
  }
  
}
