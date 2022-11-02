import { Request, Response } from "express";
import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

class UpdatePersonController {
  constructor(private updatePersonUseCase: UpdatePersonUseCase) {}
  async handle(request: Request, response: Response) {
    const { id: body_id, name, contacts, age, email, photo_url } = request.body;
    const { id } = request.params;

    const updatedPerson = await this.updatePersonUseCase.execute(
      {
        id: body_id,
        name,
        contacts,
        age,
        email,
        photo_url,
      },
      id
    );

    return response.status(200).json(updatedPerson);
  }
}

export { UpdatePersonController };
