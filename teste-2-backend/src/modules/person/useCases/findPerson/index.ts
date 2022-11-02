import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { FindPersonController } from "./FindPersonController";
import { FindPersonUseCase } from "./FindPersonUseCase";

export default (): FindPersonController => {
  const personRepository = new PersonRepository();
  const findPersonUseCase = new FindPersonUseCase(personRepository);
  const findPersonController = new FindPersonController(findPersonUseCase);

  return findPersonController;
};
