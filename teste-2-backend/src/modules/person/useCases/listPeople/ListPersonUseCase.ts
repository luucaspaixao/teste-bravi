import { Person } from "../../entities/Person";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class ListPersonUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(): Promise<Person[]> {
    const allPerson = await this.peopleRepository.findAll();
    return allPerson;
  }
}

export { ListPersonUseCase };
