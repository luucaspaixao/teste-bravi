import { initialFormValues } from ".";
import { CreatePersonType, FormAction } from "./types";
import { formatPhone } from "./utils/formatPhone";

const formReducer = (state: CreatePersonType, action: FormAction) => {
  const { type, payload } = action;
  switch (type) {
    case "phone":
      return {
        ...state,
        phone: formatPhone(payload as string),
      };
    case "whatsapp":
      return {
        ...state,
        whatsapp: formatPhone(payload as string),
      };
    case "reset":
      return initialFormValues;
    default:
      return {
        ...state,
        [type]: payload,
      };
  }
};

export { formReducer };
