import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { RequestActivityDTO } from './activity.model';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  getAllActivities() {
    return this.activityService.getAllActivities()
  }

  @Get(':id')
  getActivity(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.getActivity(id)
  }

  @Post()
  createActivity(@Body() request: RequestActivityDTO) {
    return this.activityService.createActivity(request)
  }

  @Put(':id')
  updateActivity(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestActivityDTO
  ) {
    return this.activityService.updateActivity(id, request)
  }

  @Delete(':id') 
  deleteActivity(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.deleteActivity(id)
  }
}