import { Module } from '@nestjs/common';
import { MhsController } from './mhs.controller';
import { MhsService } from './mhs.service';

@Module({
  providers: [MhsService],
  controllers: [MhsController],
})
export class MhsModule {}
