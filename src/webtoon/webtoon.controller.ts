import { Controller, Get, Param } from '@nestjs/common';
import { WebtoonService } from './webtoon.service';

@Controller('webtoon')
export class WebtoonController {
  constructor(private readonly webtoonService: WebtoonService) {}
  
  @Get(':slug')
  async getAllListChapter(@Param('slug') slug: string) {
    return this.webtoonService.allListChapter(slug)
  }

  @Get('/:slug/:id')
  async readingChapter(
    @Param('slug') slug: string,
    @Param('id') id: string
  ) {
    return this.webtoonService.readingChapter(slug, id)
  }
}
