interface RegisterProps {
  showLoginForm: () => void;
}

export default function RegisterForm({ showLoginForm }: RegisterProps) {
  return (
    <>
      <h2>Register</h2>

      <form>
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
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
