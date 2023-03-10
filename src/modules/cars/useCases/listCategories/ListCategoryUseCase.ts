import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase };