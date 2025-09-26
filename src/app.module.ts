import { Module } from '@nestjs/common';
import { StaycationModule } from './staycation/staycation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './config/typeorm.config';
import { config } from './config/configuration';
import { OtodyduckModule } from './otodyduck/otodyduck.module';
import { RouterModule } from '@nestjs/core';
import { KatakanjiModule } from './katakanji/katakanji.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // useClass: DatabaseConfig
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('postgresql://Aldinonid:Yk0RF5paENrB@ep-steep-cloud-a1ogi14z-pooler.ap-southeast-1.aws.neon.tech/portfolio?sslmode=require&channel_binding=require'),
        autoLoadEntities: true, // otomatis load entity
        synchronize: true,      // ❗ hanya untuk dev, jangan dipakai di production
        ssl: {
          rejectUnauthorized: false, // wajib di Neon karena butuh SSL
        },
      }),
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
    KatakanjiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
