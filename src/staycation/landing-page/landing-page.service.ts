import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaycationUser } from '../typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { StaycationItem } from '../typeorm/entities/Item.entity';
import { StaycationCategory } from '../typeorm/entities/Category.entity';
import { StaycationActivity } from '../typeorm/entities/Activity.entity';
import { Message, Result } from 'src/utils/enums';
import { StaycationBank } from '../typeorm/entities/Bank.entity';

@Injectable()
export class LandingPageService {
  constructor(
    @InjectRepository(StaycationUser) private userRepository: Repository<StaycationUser>,
    @InjectRepository(StaycationItem) private itemRepository: Repository<StaycationItem>,
    @InjectRepository(StaycationActivity) private activityRepository: Repository<StaycationActivity>,
    @InjectRepository(StaycationCategory) private categoryRepository: Repository<StaycationCategory>,
    @InjectRepository(StaycationBank) private bankRepository: Repository<StaycationBank>,
  ) {}

  async getLandingPage() {
    const users = await this.userRepository.find()
    const activities = await this.activityRepository.find()
    const items = await this.itemRepository.find({ relations: ['images'] })
    const categories = await this.categoryRepository.find({ relations: ['items', 'items.images'] })

    for (let i = 0; i < categories.length; i++) {
      for (let x = 0; x < categories[i].items.length; x++) {
        const categoryItem = await this.itemRepository.findOne({
          where: { id: categories[i].items[x].id },
          relations: ['images']
        })
        if (!categoryItem) return
        categoryItem.is_popular = false
        this.itemRepository.save(categoryItem)
        if (categories[i].items[0] === categories[i].items[x]) {
          categoryItem.is_popular = true
          this.itemRepository.save(categoryItem)
        }
      }
    }

    const testimonial = [
      {
        image_url: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial2.jpg?alt=media&token=972f004d-b877-4e5b-badc-248b62c0a114",
        name: "Giovaldin Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        family_name: "Aldin",
        family_occupation: "iOS Developer",
      },
      {
        image_url: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial1.jpg?alt=media&token=d7483c51-1fe8-45b6-8b91-416be17018b0",
        name: "Aldicia Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        family_name: "Felicia",
        family_occupation: "Product Designer",
      }
    ]

    const result = {
      hero: {
        travelers: users.length,
        treasures: activities.length,
        cities: items.length
      },
      most_picked: items.slice(0, 5),
      categories: categories,
      testimonial: testimonial
    }

    return new Result(Message.SUCCESS, result)
  }

  async getDetail(id: number) {
    const item = await this.itemRepository.findOne({ 
      where: { id }, 
      relations: ['category', 'features', 'images', 'activities'] 
    })
    if (!item) throw new NotFoundException(Message.ITEM_NOT_FOUND)

    const banks = await this.bankRepository.find()

    const testimonial = [
      {
        image_url: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial2.jpg?alt=media&token=972f004d-b877-4e5b-badc-248b62c0a114",
        name: "Giovaldin Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        family_name: "Aldin",
        family_occupation: "iOS Developer",
      },
      {
        image_url: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial1.jpg?alt=media&token=d7483c51-1fe8-45b6-8b91-416be17018b0",
        name: "Aldicia Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        family_name: "Felicia",
        family_occupation: "Product Designer",
      }
    ]
    
    const result = { item, banks, testimonial}
    
    return new Result(Message.SUCCESS, result)
  }
  
}
