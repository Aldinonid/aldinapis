import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LandingPageService } from './landing-page.service';

@Controller()
export class LandingPageController {
  constructor(private readonly landingPageService: LandingPageService) {}

  @Get('landing-page')
  getAllLandingPage() {
    return this.landingPageService.getLandingPage()
  }

  @Get('detail/:id')
  getDetailProduct(@Param('id', ParseIntPipe) id: number) {
    return this.landingPageService.getDetail(id)
  }
}
