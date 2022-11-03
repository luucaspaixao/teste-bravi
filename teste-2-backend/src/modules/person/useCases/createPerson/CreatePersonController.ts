import { Request, Response } from "express";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase) {}
  async handle(request: Request, response: Response) {
    const { name, contacts, age, email, photo_url, phone, whatsapp } =
      request.body;

    const createdPerson = await this.createPersonUseCase.execute({
      name,
      contacts,
      age,
      email,
      photo_url,
      phone,
      whatsapp,
    });

    return response.status(201).json(createdPerson);
  }
}

export { CreatePersonController };
