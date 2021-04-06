import fs from 'fs';
import csvParse from "csv-parse";
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


interface IImportCategory{
    name: string;
    description: string;
}
class ImportCategoriesUseCase{
    constructor(private categoriesRepositiry: ICategoriesRepository){
    }


    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{

        return new Promise((resolve, reject) =>{
            const stream = fs.createReadStream(file.path);
        const categories: IImportCategory[] = [];


        const parseFIle = csvParse();

        stream.pipe(parseFIle);

        parseFIle.on("data", async(line)=>{
            const [name, description] = line;

            categories.push({name, description});
        })
        .on("end", ()=>{
            fs.promises.unlink(file.path);
            resolve(categories);
        })
        .on("error",(err)=>{
            reject(err);
        })
        });
    }
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
        categories.map(async (category)=>{
            const { name, description } = category;

            const existCategory = this.categoriesRepositiry.findByName(name);

            if (!existCategory) {
                this.categoriesRepositiry.create({name, description})
            }
        })
    }
}
export { ImportCategoriesUseCase };