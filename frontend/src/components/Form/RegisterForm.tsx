import { useState } from "react";
import { registerService } from "../../services/authService";
import "./Form.css";

interface RegisterProps {
  showLoginForm: () => void;
}

export default function RegisterForm({ showLoginForm }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const register = async () => {
    const res = await registerService({ email: email, name: name });
    console.log(res);

    setEmail("");
    setName("");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <div className="form-input">
          <label>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div className="form-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input">
          <button>Registrarse</button>
        </div>
      </form>

      <p>
        Ya tenes una cuenta?
        <span onClick={() => showLoginForm()}>Logeate aca</span>
      </p>
    </div>
  );
}
