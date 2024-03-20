import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ToolService } from './tool.service';
import { ListToolQueries, RequestOtodyduckToolDTO } from './tool.model';

@Controller('tool')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Get()
  getAllTools(@Query() query: ListToolQueries) {
    return this.toolService.getAllTools(query)
  }

  @Get(':id')
  getTool(@Param('id', ParseIntPipe) id: number) {
    return this.toolService.getTool(id)
  }

  @Post()
  createTool(@Body() request: RequestOtodyduckToolDTO) {
    return this.toolService.createTool(request)
  }

  @Put(':id')
  updateTool(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckToolDTO
  ) {
    return this.toolService.updateTool(id, request)
  }

  @Delete(':id')
  deleteTool(@Param('id', ParseIntPipe) id: number) {
    return this.toolService.deleteTool(id)
  }
}
