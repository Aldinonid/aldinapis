import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ItemService } from './item.service';
import { RequestItemDTO } from './item.model';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAllItems() {
    return this.itemService.getAllItems()
  }

  @Get(':id')
  getItem(@Param('id', ParseIntPipe) id: number) {
    return this.itemService.getItem(id)
  }

  @Post()
  createItem(@Body() request: RequestItemDTO) {
    return this.itemService.createItem(request)
  }

  @Put(':id')
  updateItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestItemDTO
  ) {
    return this.itemService.updateItem(id, request)
  }

  @Delete(':id') 
  deleteItem(@Param('id', ParseIntPipe) id: number) {
    return this.itemService.deleteItem(id)
  }
}
