import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { DeletePersonController } from "./DeletePersonController";
import { DeletePersonUseCase } from "./DeletePersonUseCase";

export default (): DeletePersonController => {
  const personRepository = new PersonRepository();
  const deletePersonUseCase = new DeletePersonUseCase(personRepository);
  const deletePersonController = new DeletePersonController(
    deletePersonUseCase
  );

  return deletePersonController;
};
