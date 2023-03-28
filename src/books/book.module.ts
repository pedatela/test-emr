import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "src/categories/category.entity";
import { BookController } from "./book.controller";
import { BookEntity } from "./book.entity";
import { BookService } from "./book.service";

@Module({
    imports: [TypeOrmModule.forFeature([BookEntity, CategoryEntity])],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule { }