import { AppError } from "../../../../shared/errors/AppError";
import { Person } from "../../entities/Person";
import {
  ICreatePersonDTO,
  IPersonRepository,
} from "../../repositories/IPersonRepository";

class CreatePersonUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(body: ICreatePersonDTO): Promise<Person> {
    const personAlreadyExists = await this.peopleRepository.findByName(
      body.name
    );

    if (personAlreadyExists) throw new AppError("Person already exists.");

    const createdPerson = await this.peopleRepository.create(body);

    return createdPerson;
  }
}

export { CreatePersonUseCase };
