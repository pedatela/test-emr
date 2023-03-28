import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { AuthorEntity } from "./author.entity";


@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private authorRepository: Repository<AuthorEntity>,
  ) { }

  public getAllAuthors() {
    return this.authorRepository.find();
  }

  public createAuthor(author: AuthorEntity): AuthorEntity {
    const createdAuthor = this.authorRepository.create(author)
    this.authorRepository.save(createdAuthor);
    return createdAuthor;
  }

  public async findAuthorByName(name: string) {
    const possibleAuthor = await this.authorRepository.findOne({ where: { name } })
    return possibleAuthor !== null;
  }

  public async update(id: string, authorData: Partial<AuthorEntity>) {
    const author = await this.findById(id)
    this.authorRepository.update(id, authorData)
    return author;
  }

  public async delete(id: string) {
    const author = this.findById(id)
    this.authorRepository.delete(id)
    return author
  }



  private findById(id: string) {
    const possibleAuthor = this.authorRepository.find({ where: { id } });
    if (!possibleAuthor) {
      throw new Error('Author does not Exists')
    }

    return possibleAuthor;
  }
}
