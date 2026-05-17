import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChangeText: (value: string) => void;
}

function Input({
  type = "text",
  label,
  value,
  onChangeText,
  ...props
}: InputProps) {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        type={type}
        {...props}
      />
    </div>
  );
}

export default Input;
