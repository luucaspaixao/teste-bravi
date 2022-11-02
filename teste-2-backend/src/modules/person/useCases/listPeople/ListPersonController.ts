import { Request, Response } from "express";
import { ListPersonUseCase } from "./ListPersonUseCase";

class ListPersonController {
  constructor(private listPersonUseCase: ListPersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const people = await this.listPersonUseCase.execute();

    return response.status(200).json(people);
  }
}

export { ListPersonController };
