import { Specification } from "../../model/Specification";
import { ISpesificationsRepository, ICreateSpesificationDTO } from "../ISpecificationRepository";


class SpeficicationRepository implements ISpesificationsRepository{
    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: ICreateSpesificationDTO): void {
        const specification = new Specification();

        Object.assign(specification,{
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find((specification )=> specification.name === name);
        return specification;
    }

}

export { SpeficicationRepository };