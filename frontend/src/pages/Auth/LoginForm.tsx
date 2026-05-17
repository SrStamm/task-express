import { useState } from "react";
import { loginService } from "../../services/auth.service";
import "./Form.css";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

interface LoginProps {
  showRegisterForm: () => void;
}

function LoginForm({ showRegisterForm }: LoginProps) {
  const [email, setEmail] = useState("");

  const login = async () => {
    const res = await loginService({ email: email });
    localStorage.setItem("access_token", res.access_token);

    setEmail("");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="form-elements"
      >
        <Input
          label="Email:"
          value={email}
          type="email"
          onChangeText={setEmail}
        />

        <Button text="Ingresar" />
      </form>

      <p>
        No tenes una cuenta?
        <span onClick={showRegisterForm}>Registrate aca</span>
      </p>
    </div>
  );
}

export default LoginForm;
