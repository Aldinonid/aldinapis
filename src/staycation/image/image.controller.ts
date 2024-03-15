import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ImageService } from './image.service';
import { Request } from 'express';
import { RequestImageDTO } from './image.model';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getAllImages() {
    return this.imageService.getAllImages()
  }

  @Get(':id')
  getImage(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.getImage(id)
  }

  @Post()
  createImage(@Body() request: RequestImageDTO) {
    return this.imageService.createImage(request.image_url)
  }

  @Put(':id')
  updateImage(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestImageDTO
  ) {
    return this.imageService.updateImage(id, request.image_url)
  }

  @Delete(':id')
  deleteImage(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.deleteImage(id)
  }
}
