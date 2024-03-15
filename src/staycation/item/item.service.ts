import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { StaycationFeature } from '../typeorm/entities/Feature.entity';
import { StaycationItem } from '../typeorm/entities/Item.entity';
import { StaycationCategory } from '../typeorm/entities/Category.entity';
import { RequestItemDTO } from './item.model';
import { Message, Result } from 'src/utils/enums';
import { StaycationActivity } from '../typeorm/entities/Activity.entity';
import { StaycationImage } from '../typeorm/entities/Image.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(StaycationItem) private itemRepository: Repository<StaycationItem>,
    @InjectRepository(StaycationFeature) private featureRepository: Repository<StaycationFeature>,
    @InjectRepository(StaycationCategory) private categoryRepository: Repository<StaycationCategory>,
    @InjectRepository(StaycationActivity) private activityRepository: Repository<StaycationActivity>,
    @InjectRepository(StaycationImage) private imageRepository: Repository<StaycationImage>,
  ) {}

  async getAllItems() {
    const items = this.itemRepository.createQueryBuilder('staycation_items')
      .leftJoinAndSelect('staycation_items.category', 'staycation_categories')
      .leftJoinAndSelect('staycation_items.features', 'staycation_features')
      .leftJoinAndSelect('staycation_items.activities', 'staycation_activities')
      .leftJoinAndSelect('staycation_items.images', 'staycation_images')

    return new Result(
      Message.SUCCESS,
      await items.getMany()
    )
  }

  async getItem(id: number) {
    const item = await this.itemRepository.findOne({ 
      where: { id }, 
      relations: ['features', 'categories', 'images']
    })
    if (!item) throw new NotFoundException(Message.ITEM_NOT_FOUND)

    return new Result(Message.SUCCESS, item)
  }

  async createItem(request: RequestItemDTO) {
    const { 
      category_id,
      feature_ids,
      image_ids,
      activity_ids,
      ...itemRequest
    } = request
    const category = await this.categoryRepository.findOneBy({ id: category_id })
    const features = await this.featureRepository.findBy({ id: In(feature_ids)})
    const activities = await this.activityRepository.findBy({ id: In(activity_ids) })
    const images = await this.imageRepository.findBy({ id: In(image_ids) })

    const newItem = this.itemRepository.create({
      ...itemRequest,
      category: category || undefined,
      features: features,
      activities: activities,
      images: images
    })

    return new Result(
      Message.SUCCESS,
      await this.itemRepository.save(newItem)
    )
  }

  async updateItem(id: number, request: RequestItemDTO) {
    const { 
      category_id,
      feature_ids,
      image_ids,
      activity_ids,
      ...itemRequest
    } = request

    const category = await this.categoryRepository.findOneBy({ id: category_id })
    const features = await this.featureRepository.findBy({ id: In(feature_ids)})
    const activities = await this.activityRepository.findBy({ id: In(activity_ids) })
    const images = await this.imageRepository.findBy({ id: In(image_ids) })

    const item = await this.itemRepository.findOne({ where: { id } })

    if (!item) throw new NotFoundException(Message.ITEM_NOT_FOUND)

    item.updatedAt = new Date()
    Object.assign(item, {
      ...itemRequest,
      category: category,
      features: features,
      activities: activities,
      images: images
    })

    return new Result(
      Message.SUCCESS,
      await this.itemRepository.save(item)
    )
  }

  async deleteItem(id: number) {
    const item = await this.itemRepository.findOneBy({ id })
    if (!item) throw new NotFoundException(Message.ITEM_NOT_FOUND)

    const result = await this.itemRepository.delete({ id })

    if(!result.affected) throw new InternalServerErrorException()
    
    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
  
}
