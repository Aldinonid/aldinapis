import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckTool } from '../typeorm/entities/Tool.entity';
import { Repository } from 'typeorm';
import { ResponseMessage, Result } from 'src/utils/enums';
import { RequestOtodyduckToolDTO } from './tools.model';

@Injectable()
export class ToolsService {
  constructor(@InjectRepository(OtodyduckTool) private toolRepository: Repository<OtodyduckTool>) {}

  async getAllTools() {
    const tools = await this.toolRepository.find()
    return new Result(ResponseMessage.SUCCESS, tools)
  }

  async getTool(id: number) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) return new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, tool)
  }

  async createTool(request: RequestOtodyduckToolDTO) {
    const newTool = this.toolRepository.create(request)
    const createdTool = await this.toolRepository.save(newTool)
    return new Result(ResponseMessage.SUCCESS, createdTool)
  }

  async updateTool(id: number, request: RequestOtodyduckToolDTO) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) return new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    tool.updatedAt = new Date()
    Object.assign(tool, request)
    return new Result(ResponseMessage.SUCCESS, this.toolRepository.save(tool))
  }

  async deleteTool(id: number) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) return new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    await this.toolRepository.delete({ id })

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }
}
