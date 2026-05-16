import { useState } from "react";
import { loginService } from "../../services/authService";

interface LoginProps {
  showRegisterForm: () => void;
}

export default function LoginForm({ showRegisterForm }: LoginProps) {
  const [email, setEmail] = useState("");

  const login = () => {
    loginService({ email: email });
  };
  return (
    <>
      <h2>Login</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <div>
          <button type="submit" />
        </div>
      </form>

      <p>
        No tenes una cuenta?{" "}
        <span onClick={showRegisterForm}>Registrate aca</span>
      </p>
    </>
  );
}
