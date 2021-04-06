import { Router } from 'express';
import multer from 'multer';

//import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

//const categoriesRepository = CategoriesRepository.getInstance();



categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response); //handle é exportando do Router por isso o import Router no começo do codigo.
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => { // upload.single recebe o tipo do arquivo para trabalhar no upload.
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
