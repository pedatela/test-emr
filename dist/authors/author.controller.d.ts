import { AuthorEntity } from './author.entity';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/CreateAuthor.dto';
import { UpdateAuthorDTO } from './dto/UpdateAuthor.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getAllAuthors(): Promise<AuthorEntity[]>;
    createAuthor(author: CreateAuthorDTO): Promise<{
        data: AuthorEntity;
        message: string;
    }>;
    updateAuthor(id: string, author: UpdateAuthorDTO): Promise<{
        message: string;
    }>;
    deleteAuthor(id: string): Promise<{
        data: AuthorEntity[];
        message: string;
    }>;
}
