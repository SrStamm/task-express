import { useState } from "react";
import { registerService } from "../../services/auth.service";
import "./Form.css";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

interface RegisterProps {
  showLoginForm: () => void;
}

export default function RegisterForm({ showLoginForm }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const cleanData = () => {
    setEmail("");
    setName("");
  };

  const register = async () => {
    const res = await registerService({ email: email, name: name });
    console.log(res);
    cleanData();
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
        className="form-elements"
      >
        <Input label="Nombre:" onChangeText={setName} value={name} />

        <Input
          label="Email:"
          type="email"
          value={email}
          onChangeText={setEmail}
        />

        <Button text="Registrarse" />
      </form>

      <p>
        Ya tenes una cuenta?
        <span onClick={() => showLoginForm()}>Logeate aca</span>
      </p>
    </div>
  );
}
