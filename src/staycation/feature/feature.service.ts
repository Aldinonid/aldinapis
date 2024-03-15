import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaycationFeature } from '../typeorm/entities/Feature.entity';
import { RequestFeatureDTO } from './feature.model';
import { ResponseMessage, Result } from 'src/utils/enums';
import { StaycationItem } from '../typeorm/entities/Item.entity';

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(StaycationFeature) private featureRepository: Repository<StaycationFeature>,
    @InjectRepository(StaycationItem) private itemRepository: Repository<StaycationItem>,
  ) {}

  async getAllFeatures() {
    return new Result(
      ResponseMessage.SUCCESS,
      await this.featureRepository.find()
    )
  }

  async getFeature(id: number) {
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(ResponseMessage.FEATURE_NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, feature)
  }

  async createFeature(request: RequestFeatureDTO) {
    const { item_id, image_url, ...featureRequest } = request
    const item = await this.itemRepository.findOneBy({ id: item_id })
    if(!item) throw new NotFoundException(ResponseMessage.ITEM_NOT_FOUND)

    const newFeature = this.featureRepository.create({
      ...featureRequest,
      imageUrl: image_url,
      item: item
    })
    
    return new Result(
      ResponseMessage.SUCCESS,
      await this.featureRepository.save(newFeature)
    )
  }

  async updateFeature(id: number, request: RequestFeatureDTO) {
    const { item_id, image_url, ...featureRequest } = request
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(ResponseMessage.FEATURE_NOT_FOUND)

    const item = await this.itemRepository.findOneBy({ id: item_id })
    if(!item) throw new NotFoundException(ResponseMessage.ITEM_NOT_FOUND)

    const result = await this.featureRepository.update(feature.id, {
      ...featureRequest,
      imageUrl: image_url,
      item: item
    })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      ResponseMessage.SUCCESS,
      await this.featureRepository.findOneBy({ id })
    )
  }

  async deleteFeature(id: number) {
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(ResponseMessage.FEATURE_NOT_FOUND)

    const result = await this.featureRepository.delete({ id })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }

}
