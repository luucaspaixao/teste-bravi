import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaAddressBook } from "react-icons/fa";
import { ActionButton } from "./components/ActionButton";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

type PersonType = {
  id: string;
  name: string;
  age: number;
  email: string;
  photo_url: string;
  contacts: PersonType[];
};

const Table = () => {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    api.get("person").then((data) => setPeople(data.data));
  }, []);

  const deletePerson = async (id: string) => {
    try {
      await api.delete(`/person/${id}`);
      alert("Pessoa excluida com sucesso.");
      setPeople((oldState) => oldState.filter((person) => person.id !== id));
    } catch (e) {
      alert("Erro ao deletar pessoa.");
    }
  };

  return (
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
        {people.map((person) => {
          return (
            <tr>
              <td>
                <img src={person.photo_url} alt={"foto " + person.name} />
              </td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
              <td>
                <ActionButton hoverText="Lista de Contatos" onClick={() => {}}>
                  <FaAddressBook color="#016652" />
                </ActionButton>
                <ActionButton hoverText="Editar" onClick={() => {}}>
                  <FaEdit color="#016652" />
                </ActionButton>
                <ActionButton
                  hoverText="Excluir"
                  onClick={() => deletePerson(person.id)}
                >
                  <FaTrash color="#016652" />
                </ActionButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
