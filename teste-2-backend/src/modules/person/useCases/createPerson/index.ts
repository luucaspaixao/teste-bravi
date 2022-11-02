import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { CreatePersonController } from "./CreatePersonController";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

export default (): CreatePersonController => {
  const personRepository = new PersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(personRepository);
  const createPersonController = new CreatePersonController(
    createPersonUseCase
  );

  return createPersonController;
};
