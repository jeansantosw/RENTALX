import { Category } from "../model/Category";
import { Specification } from "../model/Specification";


interface ICreateSpesificationDTO{
    name: string;
    description: string;

}

interface ISpesificationsRepository{

    create({name, description}: ICreateSpesificationDTO): void;
    findByName(name: string): Specification;

}

export { ISpesificationsRepository, ICreateSpesificationDTO };