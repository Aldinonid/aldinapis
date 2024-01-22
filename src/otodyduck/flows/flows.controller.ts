import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FlowsService } from './flows.service';
import { RequestOtodyduckFlowDTO } from './flows.model';

@Controller('flows')
export class FlowsController {
  constructor(private readonly flowService: FlowsService) {}

  @Get()
  getAllFlows() {
    return this.flowService.getAllFlows()
  }

  @Get(':id')
  getFlow(@Param('id', ParseIntPipe) id: number) {
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
