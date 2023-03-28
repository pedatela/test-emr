import { Repository } from 'typeorm';
import { CategoryEntity } from "../categories/category.entity";
import { BookEntity } from "./book.entity";
export declare class BookService {
    private bookRepository;
    private categoryRepository;
    constructor(bookRepository: Repository<BookEntity>, categoryRepository: Repository<CategoryEntity>);
    private books;
    getAllBooks(author_id: string): Promise<BookEntity[]>;
    getBookByName(bookName: any): BookEntity;
    createBook(book: BookEntity): BookEntity;
    update(id: string, bookData: Partial<BookEntity>): Promise<BookEntity[]>;
    delete(id: string): Promise<BookEntity[]>;
    private findById;
}
