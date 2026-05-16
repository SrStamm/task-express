interface LoginProps {
  showRegisterForm: () => void;
}

export default function LoginForm({ showRegisterForm }: LoginProps) {
  return (
    <>
      <h2>Login</h2>

      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <button />
        </div>
      </form>

      <p>
        No tenes una cuenta?{" "}
        <span onClick={showRegisterForm}>Registrate aca</span>
      </p>
    </>
  );
}
