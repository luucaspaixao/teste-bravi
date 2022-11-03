import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { UpdatePersonContactsController } from "./UpdatePersonContactsController";
import { UpdatePersonContactsUseCase } from "./UpdatePersonContactsUseCase";

export default (): UpdatePersonContactsController => {
  const personRepository = new PersonRepository();
  const updatePersonContactsUseCase = new UpdatePersonContactsUseCase(
    personRepository
  );
  const updatePersonContactsController = new UpdatePersonContactsController(
    updatePersonContactsUseCase
  );

  return updatePersonContactsController;
};
