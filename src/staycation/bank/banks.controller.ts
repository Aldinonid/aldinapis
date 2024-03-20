import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BankService } from './banks.service';
import { RequestBankDTO } from './banks.model';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getAllBanks() {
    return this.bankService.getAllBanks()
  }

  @Get(':id')
  getBank(@Param('id', ParseIntPipe) id: number) {
    return this.bankService.getBank(id)
  }

  @Post()
  createBank(@Body() request: RequestBankDTO) {
    return this.bankService.createBank(request)
  }

  @Put(':id')
  updateBank(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: RequestBankDTO
  ) {
    return this.bankService.updateBank(id, request)
  }

  @Delete(':id')
  deleteBank(@Param('id', ParseIntPipe) id: number) {
    return this.bankService.deleteBank(id)
  }
}
