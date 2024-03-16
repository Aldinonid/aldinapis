import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaycationCategory } from '../typeorm/entities/Category.entity';
import { In, Repository } from 'typeorm';
import { StaycationItem } from '../typeorm/entities/Item.entity';
import { Message, Result } from 'src/utils/enums';
import { RequestCategoryDTO } from './category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(StaycationCategory) private categoryRepository: Repository<StaycationCategory>,
    @InjectRepository(StaycationItem) private itemRepository: Repository<StaycationItem>,
  ) {}

  async getAllCategories() {
    return new Result(
      Message.SUCCESS,
      await this.categoryRepository.find()
    )
  }

  async getCategory(id: number) {
    const category = await this.categoryRepository.findOneBy({ id })
    if (!category) throw new NotFoundException(Message.CATEGORY_NOT_FOUND)

    return new Result(Message.SUCCESS, category)
  }

  async createCategory(request: RequestCategoryDTO) {
    const { item_ids, ...categoryRequest } = request
    const items = await this.itemRepository.findBy({ id: In(item_ids) })

    const newCategory = this.categoryRepository.create({
      ...categoryRequest,
      items: items
    })

    return new Result(
      Message.SUCCESS,
      await this.categoryRepository.save(newCategory)
    )
  }

  async updateCategory(id: number, request: RequestCategoryDTO) {
    const { item_ids, ...categoryRequest } = request
    const category = await this.categoryRepository.findOneBy({ id })
    if (!category) throw new NotFoundException(Message.CATEGORY_NOT_FOUND)
    
    const items = await this.itemRepository.findBy({ id: In(item_ids) })

    category.updated_at = new Date()
    Object.assign(category, {
      ...categoryRequest,
      items: items
    })

    return new Result(
      Message.SUCCESS,
      await this.categoryRepository.save(category)
    )
  }
  
  async deleteCategory(id: number) {
    const category = await this.categoryRepository.findOneBy({ id })
    if (!category) throw new NotFoundException(Message.CATEGORY_NOT_FOUND)

    const result = await this.categoryRepository.delete({ id })

    if (!result.affected) throw new InternalServerErrorException()  
    
    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
