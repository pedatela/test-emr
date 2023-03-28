import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { AuthorEntity } from './author.entity';

import { AuthorService } from './author.service'
import { CreateAuthorDTO } from './dto/CreateAuthor.dto';
import { UpdateAuthorDTO } from './dto/UpdateAuthor.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Get()
  public async getAllAuthors() {
    return await this.authorService.getAllAuthors()
  }

  @Post()
  public async createAuthor(@Body() author: CreateAuthorDTO) {
    const authorEntity = new AuthorEntity();
    authorEntity.name = author.name;
    authorEntity.gender_id = author.gender_id;
    console.log(authorEntity)
    const createdAuthor = await this.authorService.createAuthor(authorEntity)

    return {
      data: createdAuthor,
      message: 'Author successfuly created'
    }
  }

  @Put('/:id')
  public async updateAuthor(@Param('id') id: string, @Body() author: UpdateAuthorDTO) {
    await this.authorService.update(id, author)
    return {
      message: 'Author successfuly updated'
    }
  }

  @Delete('/:id')
  public async deleteAuthor(@Param('id') id: string) {
    const deletedAuthor = await this.authorService.delete(id)
    return {
      data: deletedAuthor,
      message: 'Author successfuly deleted'
    }
  }

}
