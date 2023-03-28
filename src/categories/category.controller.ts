import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { CategoryService } from './category.service'
import { CategoryEntity } from './category.entity';
import { CreateCategoryDTO } from './dto/CreateCategory.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  public getAllCategories() {
    return this.categoryService.getAllCategories()
  }

  @Post()
  public createCategory(@Body() category: CreateCategoryDTO) {
    const categoryEntity = new CategoryEntity();
    categoryEntity.name = category.name
    return this.categoryService.createCategory(categoryEntity)
  }

}
