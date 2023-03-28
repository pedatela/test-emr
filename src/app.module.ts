import { Module } from '@nestjs/common';
import { AuthorModule } from './authors/author.module';
import { BookModule } from './books/book.module';
import { CategoryModule } from './categories/category.module';
import { dataSourceOptions } from './database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GenderModule } from './genders/gender.module';




@Module({
  imports: [BookModule, CategoryModule, AuthorModule, GenderModule, ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {

}
