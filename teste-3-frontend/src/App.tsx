import { useEffect, useState } from "react";
import { AddPersonModal } from "./components/AddPersonModal";
import { Button } from "./components/Button";
import { TablePerson } from "./components/TablePerson";
import "./styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetch } from "./hooks/useFetch";
import { toastError } from "./utils/toast";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data, error, isLoading, refetch } = useFetch("person");

  const closeAddPersonModal = (needRefetch: boolean) => {
    setIsModalVisible(false);
    if (needRefetch) refetch();
  };

  useEffect(() => {
    if (error) {
      toastError("Erro ao carregar a lista de pessoas.");
    }
  }, [error]);

  return (
    <>
      <ToastContainer />
      <div className="container">
        <h1>Teste Front-end - Bravi</h1>
        <div>
          <Button onClick={() => setIsModalVisible(true)}>
            Adicionar pessoa
          </Button>
          {isLoading ? <p>Carregando lista de pessoas...</p> : null}
          {data ? <TablePerson refetch={() => refetch()} data={data} /> : null}
          {isModalVisible ? (
            <AddPersonModal onClose={closeAddPersonModal} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
