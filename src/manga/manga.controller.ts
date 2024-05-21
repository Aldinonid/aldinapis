import { Controller, Get, Param } from '@nestjs/common';
import { MangaService } from './manga.service';

@Controller('manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}
  
  @Get(':slug')
  async getAllListChapter(@Param('slug') slug: string) {
    return this.mangaService.allListChapter(slug)
  }

  @Get('/:slug/:id')
  async readingChapter(
    @Param('slug') slug: string,
    @Param('id') id: string
  ) {
    return this.mangaService.readingChapter(slug, id)
  }
}
