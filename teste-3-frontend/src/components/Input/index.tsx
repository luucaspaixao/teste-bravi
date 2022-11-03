import "./style.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="input_wrapper">
      <label htmlFor={props.name}>
        <p>{props.label}</p>
        <input
          {...props}
          type={props.type ?? "text"}
          id={props.name}
          required={props.required ?? false}
          style={{ width: "100%" }}
        />
      </label>
    </div>
  );
};

export { Input };
