import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaycationBank } from '../typeorm/entities/Bank.entity';
import { Repository } from 'typeorm';
import { ResponseMessage, Result } from 'src/utils/enums';
import { RequestBankDTO } from './banks.model';

@Injectable()
export class BankService {
  constructor(@InjectRepository(StaycationBank) private bankRepository: Repository<StaycationBank>) {}

  async getAllBanks() {
    return new Result(
      ResponseMessage.SUCCESS, 
      await this.bankRepository.find()
    )
  }

  async getBank(id: number) {
    const bank = await this.bankRepository.findOneBy({ id })
    if (!bank) throw new NotFoundException(ResponseMessage.BANK_NOT_FOUND)

    return new Result(ResponseMessage.SUCCESS, bank)
  }

  async createBank(request: RequestBankDTO) {
    const newBank = this.bankRepository.create({
      ...request,
      accountNumber: request.account_number,
      bankName: request.bank_name
    })
    return new Result(ResponseMessage.SUCCESS, await this.bankRepository.save(newBank))
  }

  async updateBank(id: number, request: RequestBankDTO) {
    const { account_number, bank_name, ...bankRequest } = request
    const bank = await this.bankRepository.findOneBy({ id })
    if (!bank) throw new NotFoundException(ResponseMessage.BANK_NOT_FOUND)

    const result = await this.bankRepository.update(bank.id, {
      ...bankRequest,
      accountNumber: account_number,
      bankName: bank_name
    })

    if (!result.affected) throw new InternalServerErrorException()

    return new Result(
      ResponseMessage.SUCCESS, 
      await this.bankRepository.findOneBy({ id })
    )
  }

  async deleteBank(id: number) {
    const bank = await this.bankRepository.findOneBy({ id })
    if (!bank) throw new NotFoundException(ResponseMessage.BANK_NOT_FOUND)

    const result = await this.bankRepository.delete({ id })

    if(!result.affected) throw new InternalServerErrorException()

    return new Result(ResponseMessage.SUCCESS, ResponseMessage.DELETE_SUCCESS)
  }
}
