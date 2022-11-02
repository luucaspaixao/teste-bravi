import { AppError } from "../../../../shared/errors/AppError";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class DeletePersonUseCase {
  constructor(private peopleRepository: IPersonRepository) {}

  async execute(id: string): Promise<void> {
    const personAlreadyExists = await this.peopleRepository.findById(id);

    if (!personAlreadyExists) throw new AppError("Person does not exists.");

    await this.peopleRepository.delete(id);
  }
}

export { DeletePersonUseCase };
