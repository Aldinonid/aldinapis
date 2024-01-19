import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MhsModule } from './mhs/mhs.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './typeorm/typeorm.config';
import { config } from './config/configuration';

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
    MhsModule, 
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
