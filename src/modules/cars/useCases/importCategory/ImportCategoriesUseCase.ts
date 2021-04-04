import fs from 'fs';
import csvParse from "csv-parse";

class ImportCategoriesUseCase{
    execute(file: Express.Multer.File): void{
        const stream = fs.createReadStream(file.path);

        const parseFIle = csvParse();

        stream.pipe(parseFIle);

        parseFIle.on("data", async(line)=>{
            console.log(line);
        })
    }
}
export { ImportCategoriesUseCase };