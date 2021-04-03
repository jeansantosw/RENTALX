import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();



categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

   const createCategory = new CreateCategoryService(categoriesRepository);

   createCategory.execute({ name, description});

    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all);
})

export { categoriesRoutes };
