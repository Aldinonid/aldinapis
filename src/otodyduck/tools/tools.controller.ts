import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { RequestOtodyduckToolDTO } from './tools.model';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolService: ToolsService) {}

  @Get()
  getAllTools() {
    return this.toolService.getAllTools()
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
