import { ICreateContactDTO } from "../../contact/dtos/ICreateContactDTO";

interface ICreatePersonDTO {
  id?: string;
  name: string;
  age: number;
  email: string;
  photo_url: string;
  contacts: ICreateContactDTO[];
}

export { ICreatePersonDTO };
