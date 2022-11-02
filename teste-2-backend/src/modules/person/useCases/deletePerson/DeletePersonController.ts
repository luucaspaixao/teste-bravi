import { Request, Response } from "express";
import { DeletePersonUseCase } from "./DeletePersonUseCase";

class DeletePersonController {
  constructor(private deletePersonUseCase: DeletePersonUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.deletePersonUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeletePersonController };
