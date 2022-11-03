import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";
import "./styles/global.scss";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div className="container">
      <h1>Teste Front-end - Bravi</h1>
      <div>
        <Button onClick={() => setModalVisible(true)}>Adicionar pessoa</Button>
        <Table />
        <Modal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onOk={() => alert("ok")}
          title="Adicionar pessoa"
        >
          teste
        </Modal>
      </div>
    </div>
  );
}

export default App;
