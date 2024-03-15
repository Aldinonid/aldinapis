import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OtodyduckFlow } from '../typeorm/entities/Flow.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message, Result } from 'src/utils/enums';
import { RequestOtodyduckFlowDTO } from './flows.model';
import { slugify } from 'src/utils/commons';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';

@Injectable()
export class FlowsService {
  constructor(
    @InjectRepository(OtodyduckFlow) private flowRepository: Repository<OtodyduckFlow>,
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
  ) {}

  getAllFlows() {
    return new Result(Message.SUCCESS, this.flowRepository.find())
  }

  async getFlow(slug: string) {
    const isNameExist = await this.flowRepository.findOne({ where: { slug: slug }})
    if (isNameExist) throw new HttpException(Message.FLOW_NOT_FOUND, HttpStatus.NOT_FOUND)

    const courses = await this.courseRepository.find({
      
    })
    return new Result(Message.SUCCESS, {})
  }

  async createFlow(request: RequestOtodyduckFlowDTO) {
    const isNameExist = await this.flowRepository.findOne({ where: { name: request.name }})
    if (
      isNameExist?.name.toLowerCase() === request.name.toLowerCase()
    ) throw new HttpException(Message.NAME_EXIST, HttpStatus.CONFLICT)

    const newFlow = this.flowRepository.create(request)
    newFlow.slug = slugify(request.name)

    const createdFlow = await this.flowRepository.save(newFlow)
    
    return new Result(Message.SUCCESS, createdFlow)
  }

  async updateFlow(id: number, request: RequestOtodyduckFlowDTO) {
    const flow = await this.flowRepository.findOne({ where: { id } })
    if (!flow) return new HttpException(Message.FLOW_NOT_FOUND, HttpStatus.NOT_FOUND)

    Object.assign(flow, request)
    flow.slug = slugify(request.name)

    // TODO: Add relation to course first

  }

  async deleteFlow(id: number) {
    const flow = await this.flowRepository.findOne({ where: { id } })
    if (!flow) return new HttpException(Message.FLOW_NOT_FOUND, HttpStatus.NOT_FOUND)

    await this.flowRepository.delete({ id })

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
