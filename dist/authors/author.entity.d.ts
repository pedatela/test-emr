import { GenderEntity } from "../genders/gender.entity";
import { BookEntity } from "../books/book.entity";
export declare class AuthorEntity {
    id?: string;
    name: string;
    created_at: Date;
    gender_id: string;
    updated_at: Date;
    books: BookEntity[];
    gender: GenderEntity;
    constructor();
}
