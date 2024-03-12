import { Controller, Get } from '@nestjs/common';
import { LandingPageService } from './landing-page.service';

@Controller('landing-page')
export class LandingPageController {
  constructor(private readonly courseService: LandingPageService) {}

  @Get()
  getAllCourses() {
    return this.courseService.getData()
  }
}
