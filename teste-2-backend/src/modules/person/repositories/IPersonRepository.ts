import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";
import { Person } from "../entities/Person";

interface IPersonRepository {
  findById: (id: string) => Promise<Person | null> | null;
  findByName: (name: string) => Promise<Person | null> | null;
  findAll: () => Promise<Person[]>;
  create: (body: ICreatePersonDTO) => Promise<Person>;
  update: (body: ICreatePersonDTO, id: string) => Promise<Person>;
  delete: (id: string) => Promise<void>;
}

export { IPersonRepository, ICreatePersonDTO };
