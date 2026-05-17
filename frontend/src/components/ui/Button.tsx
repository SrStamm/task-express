import "./Input.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

function Button({ text, className, ...props }: ButtonProps) {
  return (
    <button className={className && className} {...props}>
      {text}
    </button>
  );
}

export default Button;
