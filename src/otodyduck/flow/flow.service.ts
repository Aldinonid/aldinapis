import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { OtodyduckFlow } from '../typeorm/entities/Flow.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { Message, Result } from 'src/utils/enums';
import { RequestOtodyduckFlowDTO } from './flow.model';
import { lowerCaseCompare, slugify } from 'src/utils/commons';
import { OtodyduckCourse } from '../typeorm/entities/Course.entity';

@Injectable()
export class FlowService {
  constructor(
    @InjectRepository(OtodyduckFlow) private flowRepository: Repository<OtodyduckFlow>,
    @InjectRepository(OtodyduckCourse) private courseRepository: Repository<OtodyduckCourse>,
  ) {}

  async getAllFlows() {
    const flows = await this.flowRepository.find({ relations: ['courses'] })
    flows.map(flow => {
      Object.assign(flow, {
        ...flow,
        total_courses: flow.courses.length
      })
    })
    
    return new Result(Message.SUCCESS, flows)
  }

  async getFlow(slug: string) {
    const flow = await this.flowRepository.findOne({
      where: { slug: slug },
      relations: ['courses']
    })
    if (!flow) throw new NotFoundException(Message.FLOW_NOT_FOUND)

    return new Result(Message.SUCCESS, flow)
  }

  async createFlow(request: RequestOtodyduckFlowDTO) {
    const { course_ids, ...flowRequest } = request
    const isNameExist = await this.flowRepository.findOne({ where: { name: flowRequest.name }})
    if (isNameExist) throw new ConflictException(Message.NAME_EXIST)

    const courses = await this.courseRepository.findBy({ id: In(course_ids) })

    const newFlow = this.flowRepository.create({
      ...flowRequest,
      slug: slugify(flowRequest.name),
      courses: courses
    })
    
    return new Result(Message.SUCCESS, await this.flowRepository.save(newFlow))
  }

  async updateFlow(id: number, request: RequestOtodyduckFlowDTO) {
    const { course_ids, ...flowRequest } = request

    const flow = await this.flowRepository.findOne({ where: { id } })
    if (!flow) throw new NotFoundException(Message.FLOW_NOT_FOUND)

    const courses = await this.courseRepository.find({ where: {id: In(course_ids)}, relations: ['flows'] })
    const allFlowNames = (await this.flowRepository.find({ where: { id: Not(id) } })).map((flow) => flow.name)

    allFlowNames.forEach((name: string) => {
      if (lowerCaseCompare(request.name, name)) 
        throw new ConflictException(Message.FLOW_NAME_EXIST)
    })

    flow.updated_at = new Date()
    Object.assign(flow, {
      ...flowRequest,
      slug: slugify(request.name),
      courses
    })
    
    return new Result(
      Message.SUCCESS,
      await this.flowRepository.save(flow)
    )
  }

  async deleteFlow(id: number) {
    const flow = await this.flowRepository.findOne({ where: { id } })
    if (!flow) return new NotFoundException(Message.FLOW_NOT_FOUND)

    const result = await this.flowRepository.delete({ id })

    if(!result.affected) throw new InternalServerErrorException()

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
