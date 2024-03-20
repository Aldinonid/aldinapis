import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';
import { OtodyduckUser, OtodyduckUserRole } from '../typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { Message, Result } from 'src/utils/enums';

@Injectable()
export class FrontPageService {
  constructor(
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
    @InjectRepository(OtodyduckUser) private userRepository: Repository<OtodyduckUser>,
  ) {}

  async getData() {
    const courses = await this.courseRepository.find({ relations: ['user'] })
    const users = await this.userRepository.find()

    const result = {
      hero: {
        students: users.filter((user) => user.role === OtodyduckUserRole.STUDENT)?.length,
        teachers: users.filter((user) => user.role === OtodyduckUserRole.TEACHER)?.length,
        classes: courses?.length
      },
      class: courses
    }
    
    return new Result(Message.SUCCESS, result)
  }
}
