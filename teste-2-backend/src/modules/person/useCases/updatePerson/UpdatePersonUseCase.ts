import { AppError } from "../../../../shared/errors/AppError";
import { HttpStatusCodes } from "../../../../shared/http/HttpStatusCode";
import { Person } from "../../entities/Person";
import {
  ICreatePersonDTO,
  IPersonRepository,
} from "../../repositories/IPersonRepository";

class UpdatePersonUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(body: ICreatePersonDTO, id: string): Promise<Person> {
    if (id !== body.id)
      throw new AppError(
        "Parameter id does not match with body id.",
        HttpStatusCodes.BAD_REQUEST
      );

    const personAlreadyExists = await this.peopleRepository.findById(id);

    if (!personAlreadyExists) throw new AppError("Person does not exists.");

    const updatedPerson = await this.peopleRepository.update(body, id);

    return updatedPerson;
  }
}

export { UpdatePersonUseCase };
