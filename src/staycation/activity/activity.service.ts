import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaycationActivity } from '../typeorm/entities/Activity.entity';
import { Repository } from 'typeorm';
import { ResponseMessage, Result } from 'src/utils/enums';
import { RequestActivityDTO } from './activity.model';
import { StaycationItem } from '../typeorm/entities/Item.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(StaycationActivity) private activityRepository: Repository<StaycationActivity>,
    @InjectRepository(StaycationItem) private itemRepository: Repository<StaycationItem>,
  ) {}

  async getAllActivities() {
    return new Result(
      ResponseMessage.SUCCESS,
      await this.activityRepository.find()
    )
  }

  async getActivity(id: number) {
    const activity = await this.activityRepository.findOneBy({ id })
    if (!activity) throw new NotFoundException(ResponseMessage.ACTIVITY_NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, activity)
  }

  async createActivity(request: RequestActivityDTO) {
    const { image_url, item_id, ...activityRequest } = request
    const item = await this.itemRepository.findOneBy({ id: item_id })
    if (!item) throw new NotFoundException(ResponseMessage.ITEM_NOT_FOUND)

    const newActivity = this.activityRepository.create({
      ...activityRequest,
      imageUrl: image_url,
      item: item
    })

    return new Result(
      ResponseMessage.SUCCESS,
      await this.activityRepository.save(newActivity)
    )
  }

  async updateActivity(id: number, request: RequestActivityDTO) {
    const { image_url, item_id, ...activityRequest } = request
    const activity = await this.activityRepository.findOneBy({ id })
    if (!activity) throw new NotFoundException(ResponseMessage.ACTIVITY_NOT_FOUND)
    
    const item = await this.itemRepository.findOneBy({ id: item_id })
    if (!item) throw new NotFoundException(ResponseMessage.ITEM_NOT_FOUND)

    const result = await this.activityRepository.update(activity.id, {
      ...activityRequest,
      imageUrl: image_url,
      item: item
    })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      ResponseMessage.SUCCESS,
      await this.activityRepository.findOneBy({ id })
    )
  }
  
  async deleteActivity(id: number) {
    const activity = await this.activityRepository.findOneBy({ id })
    if (!activity) throw new NotFoundException(ResponseMessage.ACTIVITY_NOT_FOUND)

    const result = await this.activityRepository.delete({ id })

    if (!result.affected) throw new InternalServerErrorException()  
    
    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }
}
