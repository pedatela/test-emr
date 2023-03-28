import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDTO } from './dtos/CreateBook.dto';
import { UpdateBookDTO } from './dtos/UpdateBook.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(author_id: string): Promise<BookEntity[]>;
    createBook(author_id: string, book: CreateBookDTO): BookEntity;
    updateAuthor(id: string, book: UpdateBookDTO): Promise<{
        message: string;
    }>;
    getBookByName(id: string): Promise<BookEntity[]>;
}
