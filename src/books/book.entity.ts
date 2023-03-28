import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { AuthorEntity } from "../authors/author.entity";
import { CategoryEntity } from "../categories/category.entity";
import { v4 as uuidV4 } from 'uuid';


@Entity('books')
export class BookEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  author_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({ name: "author_id" })
  author: AuthorEntity;

  @ManyToMany(() => CategoryEntity)
  @JoinTable({
    name: "book_has_categories", joinColumn: {
      name: "book_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "category_id",
      referencedColumnName: "id"
    }

  })
  categories: CategoryEntity[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}