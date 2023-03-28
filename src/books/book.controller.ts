import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { BookEntity } from './book.entity';

import { BookService } from './book.service'
import { CreateBookDTO } from './dtos/CreateBook.dto';
import { UpdateBookDTO } from './dtos/UpdateBook.dto';

@Controller('authors/:author_id/books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get()
  public getAllBooks(@Param('author_id') author_id: string) {
    return this.bookService.getAllBooks(author_id)
  }

  @Post()
  public createBook(@Param('author_id') author_id: string, @Body() book: CreateBookDTO) {
    const bookEntity = new BookEntity();
    bookEntity.name = book.name;
    bookEntity.description = book.description
    bookEntity.author_id = author_id
    bookEntity.categories = book.categories
    return this.bookService.createBook(bookEntity)
  }

  @Put('/:id')
  public async updateAuthor(@Param('id') id: string, @Body() book: UpdateBookDTO) {
    await this.bookService.update(id, book)
    return {
      message: 'Author successfuly updated'
    }
  }

  @Delete(':id')
  public getBookByName(@Param('id') id: string) {
    return this.bookService.delete(id)
  }
}
