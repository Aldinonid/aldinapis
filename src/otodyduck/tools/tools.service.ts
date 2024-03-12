import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtodyduckTool } from '../typeorm/entities/Tool.entity';
import { Repository } from 'typeorm';
import { ResponseMessage, Result } from 'src/utils/enums';
import { ListToolQueries, RequestOtodyduckToolDTO } from './tools.model';

@Injectable()
export class ToolsService {
  constructor(@InjectRepository(OtodyduckTool) private toolRepository: Repository<OtodyduckTool>) {}

  async getAllTools(query: ListToolQueries) {
    const tools = this.toolRepository.createQueryBuilder('otodyduck_tools')
      .leftJoinAndSelect('otodyduck_tools.courses', 'otodyduck_courses')

    if (query.course_id) {
      tools.where('otodyduck_courses.id = :id', {id: query.course_id})
    }

    return new Result(ResponseMessage.SUCCESS, await tools.getMany())
  }

  async getTool(id: number) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) throw new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, tool)
  }

  async createTool(request: RequestOtodyduckToolDTO) {
    const newTool = this.toolRepository.create(request)
    const createdTool = await this.toolRepository.save(newTool)
    return new Result(ResponseMessage.SUCCESS, createdTool)
  }

  async updateTool(id: number, request: RequestOtodyduckToolDTO) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) throw new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    tool.updatedAt = new Date()
    Object.assign(tool, request)
    const updatedTool = await this.toolRepository.save(tool)
    return new Result(ResponseMessage.SUCCESS, updatedTool)
  }

  async deleteTool(id: number) {
    const tool = await this.toolRepository.findOne({ where: { id } })
    if (!tool) throw new HttpException(ResponseMessage.TOOL_NOT_FOUND, HttpStatus.NOT_FOUND)

    await this.toolRepository.delete({ id })

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }
}
