import { Module } from '@nestjs/common';
import { StaycationModule } from './staycation/staycation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/typeorm.config';
import { config } from './config/configuration';
import { OtodyduckModule } from './otodyduck/otodyduck.module';
import { RouterModule } from '@nestjs/core';
import { KatakanjiModule } from './katakanji/katakanji.module';
import { JwtModule } from '@nestjs/jwt';
import { WebtoonModule } from './webtoon/webtoon.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }), 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    JwtModule.register({
      global: true,
      secret: config().secretKey,
      signOptions: { expiresIn: '20m' }
    }),
    RouterModule.register([
      {
        path: 'staycation',
        module: StaycationModule,
      },
      {
        path: 'otodyduck',
        module: OtodyduckModule
      }
    ]),
    StaycationModule,
    OtodyduckModule,
    KatakanjiModule,
    WebtoonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
