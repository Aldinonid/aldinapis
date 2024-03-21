import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaycationFeature } from '../typeorm/entities/Feature.entity';
import { RequestFeatureDTO } from './feature.model';
import { Message, Result } from 'src/utils/enums';
import { StaycationItem } from '../typeorm/entities/Item.entity';

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(StaycationFeature) private featureRepository: Repository<StaycationFeature>
  ) {}

  async getAllFeatures() {
    return new Result(
      Message.SUCCESS,
      await this.featureRepository.find()
    )
  }

  async getFeature(id: number) {
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(Message.FEATURE_NOT_FOUND)

    return new Result(Message.SUCCESS, feature)
  }

  async createFeature(request: RequestFeatureDTO) {
    const newFeature = this.featureRepository.create(request)
    
    return new Result(
      Message.SUCCESS,
      await this.featureRepository.save(newFeature)
    )
  }

  async updateFeature(id: number, request: RequestFeatureDTO) {
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(Message.FEATURE_NOT_FOUND)

    const result = await this.featureRepository.update(feature.id, request)

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      Message.SUCCESS,
      await this.featureRepository.findOneBy({ id })
    )
  }

  async deleteFeature(id: number) {
    const feature = await this.featureRepository.findOneBy({ id })
    if (!feature) throw new NotFoundException(Message.FEATURE_NOT_FOUND)

    const result = await this.featureRepository.delete({ id })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }

}
