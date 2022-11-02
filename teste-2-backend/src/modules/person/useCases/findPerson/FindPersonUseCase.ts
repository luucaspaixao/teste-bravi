import { AppError } from "../../../../shared/errors/AppError";
import { HttpStatusCodes } from "../../../../shared/http/HttpStatusCode";
import { Person } from "../../entities/Person";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class FindPersonUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(id: string): Promise<Person> {
    const person = await this.peopleRepository.findById(id);

    if (!person)
      throw new AppError("Person does not exist.", HttpStatusCodes.NOT_FOUND);

    return person;
  }
}

export { FindPersonUseCase };
