import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { CategoryEntity } from "./category.entity";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) { }

  public getAllCategories() {
    return this.categoryRepository.find();
  }

  public createCategory(category: CategoryEntity): CategoryEntity {
    const createdCategory = this.categoryRepository.create(category);
    this.categoryRepository.save(createdCategory);
    return createdCategory;
  }
}
