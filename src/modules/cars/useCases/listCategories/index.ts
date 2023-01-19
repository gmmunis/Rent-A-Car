import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesuseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesuseCase);

export { listCategoriesController };