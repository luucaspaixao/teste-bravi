import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { UpdatePersonController } from "./UpdatePersonController";
import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

export default (): UpdatePersonController => {
  const personRepository = new PersonRepository();
  const updatePersonUseCase = new UpdatePersonUseCase(personRepository);
  const updatePersonController = new UpdatePersonController(
    updatePersonUseCase
  );

  return updatePersonController;
};
