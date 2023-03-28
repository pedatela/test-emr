import { AuthorEntity } from "../authors/author.entity";
import { CategoryEntity } from "../categories/category.entity";
export declare class BookEntity {
    id?: string;
    name: string;
    description: string;
    author_id: string;
    created_at: Date;
    updated_at: Date;
    author: AuthorEntity;
    categories: CategoryEntity[];
    constructor();
}
