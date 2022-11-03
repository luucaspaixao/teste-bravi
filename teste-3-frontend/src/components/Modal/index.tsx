import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button";
import "./style.scss";

type ModalProps = {
  title: string;
  onOk: () => void;
  onClose: () => void;
  children: ReactNode;
  visible: boolean;
};

const Modal = (props: ModalProps) => {
  return props.visible
    ? createPortal(
        <div className="modal_background">
          <div className="modal_container">
            <div className="modal_header">
              <h3>{props.title}</h3>
              <button type="button" onClick={props.onClose}>
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="modal_body">{props.children}</div>
            <div className="modal_footer">
              <Button onClick={props.onOk}>Salvar</Button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export { Modal };
