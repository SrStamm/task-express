import { useState } from "react";
import { loginService } from "../../services/authService";
import "./Form.css";

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
      >
        <div className="form-input">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <div className="form-input">
          <button type="submit">Ingresar</button>
        </div>
      </form>

      <p>
        No tenes una cuenta?
        <span onClick={showRegisterForm}>Registrate aca</span>
      </p>
    </div>
  );
}

export default LoginForm;
