import { AppError } from "../../../../shared/errors/AppError";
import { HttpStatusCodes } from "../../../../shared/http/HttpStatusCode";
import { IUpdateContactsDTO } from "../../dtos/IUpdateContactsDTO";
import { Person } from "../../entities/Person";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class UpdatePersonContactsUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(body: IUpdateContactsDTO, id: string): Promise<Person> {
    if (id !== body.id)
      throw new AppError(
        "Parameter id does not match with body id.",
        HttpStatusCodes.BAD_REQUEST
      );

    const personAlreadyExists = await this.peopleRepository.findById(id);

    if (!personAlreadyExists) throw new AppError("Person does not exists.");

    const updatedPerson = await this.peopleRepository.updateContacts(body, id);

    return updatedPerson;
  }
}

export { UpdatePersonContactsUseCase };
