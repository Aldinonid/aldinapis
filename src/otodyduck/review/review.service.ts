import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtodyduckReview } from '../typeorm/entities/Review.entity';
import { RequestOtodyduckReviewDTO } from './review.model';
import { Message, Result } from 'src/utils/enums';
import { OtodyduckUserData } from '../user/user.model';
import { OtodyduckUserService } from '../user/user.service';
import { CourseService } from '../course/course.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(OtodyduckReview) private reviewRepository: Repository<OtodyduckReview>,
    private readonly courseService: CourseService,
    private readonly userService: OtodyduckUserService
  ) {}

  async getAllReviews() {
    return new Result(
      Message.SUCCESS, 
      await this.reviewRepository.find({ relations: ['course', 'user'] })
    )
  }

  async getReview(id: number) {
    const review = await this.reviewRepository.findOne({
      where: { id },
      relations: ['course', 'user']
    })
    if (!review) throw new NotFoundException(Message.REVIEW_NOT_FOUND)

    return new Result(Message.SUCCESS, review)
  }
  
  async createReview(request: RequestOtodyduckReviewDTO, data: OtodyduckUserData) {
    const { course_id, ...reviewRequest } = request
    const user = await this.userService.getUserId(data.id)
    const course = await this.courseService.getCourseById(course_id)

    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)
    if (!user) throw new NotFoundException(Message.USER_NOT_FOUND)
    
    const review = this.reviewRepository.create({
      ...reviewRequest,
      user: user,
      course: course
    })

    return new Result(
      Message.SUCCESS, 
      await this.reviewRepository.save(review)
    )
  }

  async updateReview(id: number, request: RequestOtodyduckReviewDTO) {
    const { course_id, ...reviewRequest } = request
    const review = this.reviewRepository.findOneBy({ id })
    const course = await this.courseService.getCourseById(course_id)

    if (!review) throw new NotFoundException(Message.REVIEW_NOT_FOUND)

    if (!course) throw new NotFoundException(Message.COURSE_NOT_FOUND)
    
    const result = await this.reviewRepository.update(id, {
      ...reviewRequest,
      course: course
    })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      Message.SUCCESS,
      await this.reviewRepository.findOneBy({ id })
    )
  }

  async deleteReview(id: number) {
    const review = this.reviewRepository.findOneBy({ id })
    if (!review) throw new NotFoundException(Message.REVIEW_NOT_FOUND)

    await this.reviewRepository.delete({ id })
    
    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
