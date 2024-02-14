import { Controller, Get } from '@nestjs/common';
import { KatakanjiService } from './katakanji.service';

@Controller('katakanji')
export class KatakanjiController {
  constructor(private readonly katakanjiService: KatakanjiService) {}

  @Get()
  getArticle() {
    return this.katakanjiService.getAllArticle()
  }

  @Get('/onboarding')
  getOnboardingQuestion() {
    return this.katakanjiService.getAllOnboardingQuestions()
  }

}
