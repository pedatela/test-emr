import { CategoryService } from './category.service';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDTO } from './dto/CreateCategory.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<CategoryEntity[]>;
    createCategory(category: CreateCategoryDTO): CategoryEntity;
}
