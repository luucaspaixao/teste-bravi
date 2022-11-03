export type EditPersonType = {
  name: string;
  age: number;
  email: string;
  phone: string;
  whatsapp: string;
  photo_url: string;
};

export type FormAction = {
  type: keyof EditPersonType | "reset";
  payload?: string | number;
};
