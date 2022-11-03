export type CreatePersonType = {
  name: string;
  age: number;
  email: string;
  phone: string;
  whatsapp: string;
  photo_url: string;
};

export type FormAction = {
  type: keyof CreatePersonType | "reset";
  payload?: string | number;
};
