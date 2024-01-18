import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { MhsModule } from './mhs/mhs.module';
import { Profile } from './typeorm/entities/profile';
import { Post } from './typeorm/entities/Post';
@Module({
  imports: [MhsModule, UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aldinonid',
    database: 'portfolio',
    entities: [User, Profile, Post],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
