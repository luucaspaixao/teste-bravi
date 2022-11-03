interface IUpdateContactsDTO {
  id?: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  whatsapp: string;
  photo_url: string;
  contacts: IUpdateContactsDTO[];
}

export { IUpdateContactsDTO };
