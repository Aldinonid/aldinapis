import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FlowService } from './flow.service';
import { RequestOtodyduckFlowDTO } from './flow.model';

@Controller('flow')
export class FlowsController {
  constructor(private readonly flowService: FlowService) {}

  @Get()
  getAllFlows() {
    return this.flowService.getAllFlows()
  }

  @Get(':id')
  getFlow(@Param('id') id: number) {
    return this.flowService.getFlow(id)
  }

  @Post()
  createFlow(@Body() createFlowDTO: RequestOtodyduckFlowDTO) {
    return this.flowService.createFlow(createFlowDTO)
  }

  @Put(':id')
  updateFlow(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestOtodyduckFlowDTO
  ) {
    return this.flowService.updateFlow(id, request)
  }

  @Delete(':id')
  deleteFlow(@Param('id', ParseIntPipe) id: number) {
    return this.flowService.deleteFlow(id)
  }

}
