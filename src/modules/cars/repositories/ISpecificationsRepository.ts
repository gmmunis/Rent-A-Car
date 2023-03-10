import { Specification } from "../entities/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationsDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationsDTO };