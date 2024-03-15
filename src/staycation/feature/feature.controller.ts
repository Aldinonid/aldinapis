import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { RequestFeatureDTO } from './feature.model';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Get()
  getAllFeatures() {
    return this.featureService.getAllFeatures()
  }

  @Get(':id')
  getFeature(@Param('id', ParseIntPipe) id: number) {
    return this.featureService.getFeature(id)
  }

  @Post()
  createFeature(@Body() request: RequestFeatureDTO) {
    return this.featureService.createFeature(request)
  }

  @Put(':id')
  updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestFeatureDTO
  ) {
    return this.featureService.updateFeature(id, request)
  }

  @Delete(':id') 
  deleteFeature(@Param('id', ParseIntPipe) id: number) {
    return this.featureService.deleteFeature(id)
  }
}
