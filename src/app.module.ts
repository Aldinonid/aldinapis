import { Module } from '@nestjs/common';
import { StaycationModule } from './staycation/staycation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/typeorm.config';
import { config } from './config/configuration';
import { OtodyduckModule } from './otodyduck/otodyduck.module';
import { RouterModule } from '@nestjs/core';

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
    OtodyduckModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
