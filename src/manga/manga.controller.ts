import { Controller, Get, Param, Query } from '@nestjs/common';
import { MangaService } from './manga.service';
import { ListMangaQueries } from './manga.model';

@Controller('manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Get('popular')
  async getPopularManga() {
    return this.mangaService.getPopularManga()
  }
  
  @Get('')
  async searchManga(@Query() query: ListMangaQueries) {
    return this.mangaService.searchManga(query.q)
  }
  
  @Get(':slug')
  async getManga(@Param('slug') slug: string) {
    return this.mangaService.mangaDetails(slug)
  }

  @Get(':slug/:id')
  async readingChapter(
    @Param('slug') slug: string,
    @Param('id') id: string
  ) {
    return this.mangaService.readingChapter(slug, id)
  }
}
