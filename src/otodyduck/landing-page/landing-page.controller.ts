import { Controller, Get } from '@nestjs/common';
import { FrontPageService } from './landing-page.service';

@Controller()
export class FrontPageController {
  constructor(private readonly courseService: FrontPageService) {}

  @Get('landing-page')
  getAllCourses() {
    return this.courseService.getData()
  }
}
