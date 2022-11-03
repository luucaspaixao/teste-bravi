import { Request, Response } from "express";
import { UpdatePersonContactsUseCase } from "./UpdatePersonContactsUseCase";

class UpdatePersonContactsController {
  constructor(
    private updatePersonContactsUseCase: UpdatePersonContactsUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const {
      id: body_id,
      name,
      contacts,
      age,
      email,
      photo_url,
      phone,
      whatsapp,
    } = request.body;
    const { id } = request.params;

    const updatedPerson = await this.updatePersonContactsUseCase.execute(
      {
        id: body_id,
        name,
        contacts,
        age,
        email,
        photo_url,
        phone,
        whatsapp,
      },
      id
    );

    return response.status(200).json(updatedPerson);
  }
}

export { UpdatePersonContactsController };
