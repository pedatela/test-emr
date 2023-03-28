import { Module } from '@nestjs/common';
import { AuthorModule } from './authors/author.module';
import { BookModule } from './books/book.module';
import { CategoryModule } from './categories/category.module';
import { dataSourceOptions } from './database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';




@Module({
  imports: [BookModule, CategoryModule, AuthorModule, ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {

}
