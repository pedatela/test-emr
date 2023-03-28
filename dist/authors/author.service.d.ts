import { Repository } from 'typeorm';
import { AuthorEntity } from "./author.entity";
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<AuthorEntity>);
    getAllAuthors(): Promise<AuthorEntity[]>;
    createAuthor(author: AuthorEntity): AuthorEntity;
    findAuthorByName(name: string): Promise<boolean>;
    update(id: string, authorData: Partial<AuthorEntity>): Promise<AuthorEntity[]>;
    delete(id: string): Promise<AuthorEntity[]>;
    private findById;
}
