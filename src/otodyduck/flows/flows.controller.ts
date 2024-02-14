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

  @Get(':slug')
  getFlow(@Param('slug') slug: string) {
    return this.flowService.getFlow(slug)
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
