import { GenderEntity } from "../genders/gender.entity";
import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

import { BookEntity } from "../books/book.entity";

@Entity('authors')
export class AuthorEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  gender_id: string;

  @CreateDateColumn()
  updated_at: Date;


  @OneToMany(() => BookEntity, (book) => book.author_id)
  books: BookEntity[]

  @OneToOne(() => GenderEntity)
  @JoinColumn({ name: "gender_id" })
  gender: GenderEntity

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}