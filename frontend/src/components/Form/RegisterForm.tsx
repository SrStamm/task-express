import { useState } from "react";
import { registerService } from "../../services/authService";

interface RegisterProps {
  showLoginForm: () => void;
}

export default function RegisterForm({ showLoginForm }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const register = async () => {
    const res = await registerService({ email: email, name: name });
    console.log(res);
  };

  return (
    <>
      <h2>Register</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <div>
          <label>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button />
        </div>
      </form>

      <p>
        Ya tenes una cuenta?
        <span onClick={() => showLoginForm()}>Logeate aca</span>
      </p>
    </>
  );
}
