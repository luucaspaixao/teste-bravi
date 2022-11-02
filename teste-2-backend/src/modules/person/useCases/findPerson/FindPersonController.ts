import { Request, Response } from "express";
import { FindPersonUseCase } from "./FindPersonUseCase";

class FindPersonController {
  constructor(private findPersonUseCase: FindPersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const person = await this.findPersonUseCase.execute(id);

    return response.status(200).json(person);
  }
}

export { FindPersonController };
