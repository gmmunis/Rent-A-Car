import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesuseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesuseCase);

export { listCategoriesController };