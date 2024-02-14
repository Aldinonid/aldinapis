import { Module } from '@nestjs/common';
import { KatakanjiController } from './katakanji.controller';
import { KatakanjiService } from './katakanji.service';

@Module({
  controllers: [KatakanjiController],
  providers: [KatakanjiService]
})
export class KatakanjiModule {}
