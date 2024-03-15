import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaycationImage } from '../typeorm/entities/Image.entity';
import { Repository } from 'typeorm';
import { Message, Result } from 'src/utils/enums';

@Injectable()
export class ImageService {
  constructor(@InjectRepository(StaycationImage) private imageRepository: Repository<StaycationImage>) {}

  async getAllImages() {
    return new Result(
      Message.SUCCESS, 
      await this.imageRepository.find()
    )
  }

  async getImage(id: number) {
    const image = await this.imageRepository.findOneBy({ id })
    if (!image) throw new NotFoundException(Message.IMAGE_NOT_FOUND)

    return new Result(Message.SUCCESS, image)
  }

  async createImage(imageUrl: string) {
    const newImage = this.imageRepository.create({ imageUrl })
    
    return new Result(Message.SUCCESS, await this.imageRepository.save(newImage))
  }

  async updateImage(id: number, imageUrl: string) {
    const image = await this.imageRepository.findOneBy({ id })
    if (!image) throw new NotFoundException(Message.IMAGE_NOT_FOUND)

    const result = await this.imageRepository.update(id, { imageUrl })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      Message.SUCCESS, 
      await this.imageRepository.findOneBy({ id })
    )
  }

  async deleteImage(id: number) {
    const image = await this.imageRepository.findOneBy({ id })
    if (!image) throw new NotFoundException(Message.IMAGE_NOT_FOUND)

    const result = await this.imageRepository.delete({ id })

    if(!result.affected) throw new InternalServerErrorException()

    return new Result(Message.SUCCESS, Message.DELETE_SUCCESS)
  }
}
