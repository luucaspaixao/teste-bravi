import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./style.scss";

type ModalProps = {
  title: string;
  okText?: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  return createPortal(
    <div className="modal_background">
      <div className="modal_container">
        <div className="modal_header">
          <h3>{props.title}</h3>
          <button type="button" onClick={props.onClose}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="modal_body">{props.children}</div>
      </div>
    </div>,
    document.body
  );
};

export { Modal };
