import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";


const importCategoriesUseCase = new ImportCategoriesUseCase();
const importCategoryController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoryController };