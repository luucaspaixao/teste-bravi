import { FaTrash } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { PersonType } from "../TablePerson";
import { ActionButton } from "../TablePerson/components/ActionButton";
import {
  toastError,
  toastPromiseError,
  toastPromiseLoading,
  toastPromiseSuccess,
} from "../../utils/toast";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import "./style.scss";
import { toast } from "react-toastify";

type ContactsModalProps = {
  person: PersonType;
  onClose: () => void;
};
const ContactsModal = (props: ContactsModalProps) => {
  const { data, error, isLoading, mutate, refetch } = useFetch(
    `person/${props.person.id}`
  );

  const { data: allPerson } = useFetch(`person`);

  const [selectedContact, setSelectedContact] = useState<null | string>(null);

  const deleteContact = async (id: string) => {
    const mutatedContacts = [...data.contacts].filter(
      (contact: PersonType) => contact.id !== id
    );

    const body = {
      ...data,
      contacts: mutatedContacts,
    };

    const toastId = toastPromiseLoading("Removendo contato, aguarde...");

    try {
      await api.put(`person/${props.person.id}`, body);
      mutate(body);
      toastPromiseSuccess(toastId, "Contato removido com sucesso!");
    } catch (e: any) {
      toastPromiseError(toastId, "Erro ao remover contato.");
    }
  };

  const addContact = async () => {
    if (!selectedContact) {
      toast.info("Você deve selecionar um contato para adicionar.", {
        autoClose: 5000,
      });
      return;
    }

    const toastId = toastPromiseLoading("Adicionando contato, aguarde...");

    const mutatedData = { ...data };
    mutatedData.contacts = [
      ...mutatedData.contacts,
      allPerson.find((person: PersonType) => person.id === selectedContact),
    ];

    try {
      await api.put(`person/${props.person.id}`, mutatedData);
      mutate(mutatedData);
      toastPromiseSuccess(toastId, "Contato adicionado com sucesso!");
    } catch (e: any) {
      toastPromiseError(toastId, "Erro ao adicionar contato.");
    }
  };

  useEffect(() => {
    if (error) {
      toastError("Erro ao carregar a lista de contatos. - " + error);
      props.onClose();
    }
  }, [error]);

  return (
    <Modal
      onClose={props.onClose}
      title={`Lista de contatos do/a ${props.person.name}`}
    >
      <div className="container_add-contact">
        <select
          onChange={(e) => setSelectedContact(e.target.value)}
          className="select_add-contact"
          defaultValue={""}
        >
          <option value="" disabled>
            Selecione uma pessoa
          </option>
          {allPerson?.map((contact: PersonType) => (
            <option key={contact.id} value={contact.id}>
              {contact.name}
            </option>
          ))}
        </select>
        <Button onClick={addContact}>Adicionar contato</Button>
      </div>
      {isLoading ? (
        <p>Carregando contatos...</p>
      ) : (
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
            {data?.contacts.map((contact: PersonType) => {
              return (
                <tr key={contact.id}>
                  <td>
                    {contact.photo_url ? (
                      <img
                        src={contact.photo_url}
                        alt={"foto " + contact.name}
                      />
                    ) : null}
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.age}</td>
                  <td>{contact.email}</td>
                  <td>
                    <ActionButton
                      hoverText="Excluir"
                      onClick={() =>
                        confirm(
                          `Tem certeza que deseja excluir o contato ${contact.name}?`
                        )
                          ? deleteContact(contact.id)
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
      )}
    </Modal>
  );
};

export { ContactsModal };
