import { Repository } from 'typeorm';
import { CategoryEntity } from "./category.entity";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    getAllCategories(): Promise<CategoryEntity[]>;
    createCategory(category: CategoryEntity): CategoryEntity;
}
