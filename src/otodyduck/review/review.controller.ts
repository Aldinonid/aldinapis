import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { RequestOtodyduckReviewDTO } from './review.model';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { OtodyduckUserRequest } from '../user/user.model';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  getAllReviews() {
    return this.reviewService.getAllReviews()
  }

  @Get(':id')
  getReview(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.getReview(id)
  }
  
  @UseGuards(JwtGuard)
  @Post()
  createReview(
    @Body() request: RequestOtodyduckReviewDTO,
    @Request() req: OtodyduckUserRequest
  ) {
    return this.reviewService.createReview(request, req.user)
  }
  
  @Put(':id')
  updateReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckReviewDTO
  ) {
    return this.reviewService.updateReview(id, request)
  }

  @Delete(':id')
  deleteReview(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.deleteReview(id)
  }
}
