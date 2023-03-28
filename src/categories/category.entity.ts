import { BookEntity } from "src/books/book.entity";
import { Entity, PrimaryColumn, Column, ManyToMany } from "typeorm";
import { v4 as uuidV4 } from 'uuid';


@Entity('categories')
export class CategoryEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}