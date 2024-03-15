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
    const items = await this.itemRepository.find()

    // const categories = (await this.categoryRepository.find({ relations: ['items'] }))
    //   .map((category) => category.items.map( async (item) => {
    //     const categoryItem = await this.itemRepository.findOneBy({ id: item.id })
    //     if (!categoryItem) return
    //     categoryItem.isPopular = false
    //     await this.itemRepository.save(categoryItem)
    //     if (category.items[0].id === item.id) {
    //       categoryItem.isPopular = true
    //       await this.itemRepository.save(categoryItem)
    //     }
    //     return await this.categoryRepository.find({ relations: ['items'] })
    //   }))
    const categories = (await this.categoryRepository.find({ relations: ['items'] }))

    for (let i = 0; i < categories.length; i++) {
      for (let x = 0; x < categories[i].items.length; x++) {
        const categoryItem = await this.itemRepository.findOneBy({ id: categories[i].items[x].id })
        if (!categoryItem) return
        categoryItem.isPopular = false
        this.itemRepository.save(categoryItem)
        if (categories[i].items[0] === categories[i].items[x]) {
          categoryItem.isPopular = true
          this.itemRepository.save(categoryItem)
        }
      }
    }

    const testimonial = [
      {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial2.jpg?alt=media&token=972f004d-b877-4e5b-badc-248b62c0a114",
        name: "Giovaldin Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Aldin",
        familyOccupation: "iOS Developer",
      },
      {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial1.jpg?alt=media&token=d7483c51-1fe8-45b6-8b91-416be17018b0",
        name: "Aldicia Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Felicia",
        familyOccupation: "Product Designer",
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
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial2.jpg?alt=media&token=972f004d-b877-4e5b-badc-248b62c0a114",
        name: "Giovaldin Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Aldin",
        familyOccupation: "iOS Developer",
      },
      {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/aldinonid7.appspot.com/o/staycation%2Ftestimonial1.jpg?alt=media&token=d7483c51-1fe8-45b6-8b91-416be17018b0",
        name: "Aldicia Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Felicia",
        familyOccupation: "Product Designer",
      }
    ]
    
    const result = { item, banks, testimonial}
    
    return new Result(Message.SUCCESS, result)
  }
  
}
