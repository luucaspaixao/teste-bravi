import { ButtonHTMLAttributes, ReactNode } from "react";
import "./style.scss";

type ButtonProps = {
  children: ReactNode;
};

export const Button = (
  props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button {...props} className="default_button">
      {props.children}
    </button>
  );
};
