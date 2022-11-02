import { PersonRepository } from "../../repositories/implementations/PersonRepository";
import { ListPersonController } from "./ListPersonController";
import { ListPersonUseCase } from "./ListPersonUseCase";

export default (): ListPersonController => {
  const personRepository = new PersonRepository();
  const listPersonUseCase = new ListPersonUseCase(personRepository);
  const listPersonController = new ListPersonController(listPersonUseCase);

  return listPersonController;
};
