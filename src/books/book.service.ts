import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { CategoryEntity } from "../categories/category.entity";
import { BookEntity } from "./book.entity";

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) { }

  private books: Array<BookEntity> = []

  public getAllBooks(author_id: string) {

    return this.bookRepository.find({ where: { author_id } });
  }

  public getBookByName(bookName): BookEntity {
    return this.books.find(book => book.name === bookName);
  }


  public createBook(book: BookEntity): BookEntity {
    const categoriesArray = []

    for (let index = 0; index < book.categories.length; index++) {
      const categoryEntity = new CategoryEntity()
      const category = book.categories[index];
      categoryEntity.name = `${category}`
      this.categoryRepository.save(categoryEntity)
      categoriesArray.push(categoryEntity)
    }

    book = { ...book, categories: categoriesArray }

    const createdBook = this.bookRepository.create(book)
    this.bookRepository.save(createdBook);
    return createdBook;

  }

  public async update(id: string, bookData: Partial<BookEntity>) {
    const author = await this.findById(id)
    this.bookRepository.update(id, bookData)
    return author;
  }

  public async delete(id: string) {
    const book = this.findById(id)
    this.bookRepository.delete(id)
    return book
  }


  private findById(id: string) {
    const possibleBook = this.bookRepository.find({ where: { id } });
    if (!possibleBook) {
      throw new Error('Book does not Exists')
    }

    return possibleBook;
  }
}
