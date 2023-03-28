import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookEntity } from "src/books/book.entity";
import { AuthorController } from "./author.controller";
import { AuthorEntity } from "./author.entity";
import { AuthorService } from "./author.service";
import { AuthorIsUniqueValidator } from "./validations/AuthorIsUnique.validations";

@Module({
    imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
    controllers: [AuthorController],
    providers: [AuthorService, AuthorIsUniqueValidator]
})
export class AuthorModule { }