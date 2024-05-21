import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MhsModule } from './mhs/mhs.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './typeorm/typeorm.config';
import { config } from './config/configuration';
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import { WebtoonModule } from './webtoon/webtoon.module';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'debug',
      format: winston.format.json(),
      transports: [new winston.transports.Console()]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }), 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MhsModule, 
    UsersModule, WebtoonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
