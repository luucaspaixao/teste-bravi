import "./style.scss";
import { FaEdit, FaTrash, FaAddressBook } from "react-icons/fa";
import { ActionButton } from "./components/ActionButton";
import { api } from "../../services/api";
import { ContactsModal } from "../ContactsModal";
import { useState } from "react";
import { EditPersonModal } from "../EditPersonModal";
import {
  toastPromiseError,
  toastPromiseLoading,
  toastPromiseSuccess,
} from "../../utils/toast";

export type PersonType = {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  whatsapp: string;
  photo_url: string;
  contacts: PersonType[];
};

type TablePersonProps = {
  data: PersonType[];
  refetch: () => void;
};

const TablePerson = (props: TablePersonProps) => {
  const [personContact, setPersonContact] = useState({} as PersonType);
  const [personEdit, setPersonEdit] = useState({} as PersonType);

  const deletePerson = async (id: string) => {
    const toastId = toastPromiseLoading("Removendo pessoa, aguarde...");
    try {
      await api.delete(`/person/${id}`);
      toastPromiseSuccess(toastId, "Pessoa removida com sucesso!");
      props.refetch();
    } catch (e) {
      toastPromiseError(toastId, "Erro ao remover a pessoa");
    }
  };

  const onCloseEditPersonModal = (needRefetch: boolean) => {
    setPersonEdit({} as PersonType);
    if (needRefetch) props.refetch();
  };

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((person: PersonType) => {
            return (
              <tr key={person.id}>
                <td>
                  {person.photo_url ? (
                    <img src={person.photo_url} alt={"foto " + person.name} />
                  ) : null}
                </td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.email}</td>
                <td>
                  <ActionButton
                    hoverText="Lista de Contatos"
                    onClick={() => setPersonContact(person)}
                  >
                    <FaAddressBook color="#016652" />
                  </ActionButton>
                  <ActionButton
                    hoverText="Editar"
                    onClick={() => setPersonEdit(person)}
                  >
                    <FaEdit color="#016652" />
                  </ActionButton>
                  <ActionButton
                    hoverText="Excluir"
                    onClick={() =>
                      confirm(
                        "Tem certeza que deseja excluir a pessoa " +
                          person.name +
                          "?"
                      )
                        ? deletePerson(person.id)
                        : null
                    }
                  >
                    <FaTrash color="#016652" />
                  </ActionButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {personContact.id && (
        <ContactsModal
          person={personContact}
          onClose={() => setPersonContact({} as PersonType)}
        />
      )}
      {personEdit.id && (
        <EditPersonModal person={personEdit} onClose={onCloseEditPersonModal} />
      )}
    </>
  );
};

export { TablePerson };
