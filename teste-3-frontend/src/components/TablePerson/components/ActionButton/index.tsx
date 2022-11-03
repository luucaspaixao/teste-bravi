import { ReactNode } from "react";
import "./style.scss";

type ActionButtonProps = {
  onClick: () => void;
  hoverText: string;
  children: ReactNode;
};

const ActionButton = (props: ActionButtonProps) => {
  return (
    <button className="action_button" onClick={props.onClick} type="button">
      <div className="action_button-tooltip">{props.hoverText}</div>
      {props.children}
    </button>
  );
};

export { ActionButton };
