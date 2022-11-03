import { FormEvent, useReducer } from "react";
import { api } from "../../services/api";
import {
  toastPromiseError,
  toastPromiseLoading,
  toastPromiseSuccess,
} from "../../utils/toast";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { PersonType } from "../TablePerson";
import { formReducer } from "./formReducer";

type AddPersonModalProps = {
  onClose: (needRefetch: boolean) => void;
  person: PersonType;
};

const EditPersonModal = (props: AddPersonModalProps) => {
  const [state, dispatch] = useReducer(formReducer, props.person);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      ...props.person,
      ...state,
    };

    console.log(body);
    // return;

    const toastId = toastPromiseLoading("Atualizando pessoa, aguarde...");
    try {
      await api.put(`person/${props.person.id}`, { ...props.person, ...state });
      toastPromiseSuccess(toastId, "Pessoa atualizada com sucesso!");
      props.onClose(true);
    } catch (e: any) {
      toastPromiseError(toastId, "Erro ao atualizar pessoa.");
    }
  };

  const closeModal = () => {
    dispatch({ type: "reset" });
    props.onClose(false);
  };

  return (
    <Modal onClose={closeModal} title="Adicionar pessoa">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="photo_url"
          label="Foto"
          value={state.photo_url}
          onChange={(event) =>
            dispatch({ type: "photo_url", payload: event.target.value })
          }
          placeholder="Coloque a url de uma foto."
        />
        <Input
          name="name"
          label="Nome"
          value={state.name}
          onChange={(event) =>
            dispatch({ type: "name", payload: event.target.value })
          }
          placeholder="Digite o nome"
          required
        />
        <Input
          name="age"
          label="Idade"
          type="number"
          value={state.age}
          onChange={(event) =>
            dispatch({ type: "age", payload: event.target.value })
          }
          placeholder="Digite a idade"
          required
          min={0}
        />
        <Input
          name="email"
          label="E-mail"
          type="email"
          value={state.email}
          onChange={(event) =>
            dispatch({ type: "email", payload: event.target.value })
          }
          placeholder="Digite o email"
          required
        />
        <Input
          name="phone"
          label="Celular"
          value={state.phone}
          onChange={(event) =>
            dispatch({ type: "phone", payload: event.target.value })
          }
          placeholder="Digite o celular"
        />
        <Input
          name="whatsapp"
          label="WhatsApp"
          value={state.whatsapp}
          onChange={(event) =>
            dispatch({ type: "whatsapp", payload: event.target.value })
          }
          placeholder="Digite o WhatsApp"
        />
        <div className="modal_footer">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
};

export { EditPersonModal };
