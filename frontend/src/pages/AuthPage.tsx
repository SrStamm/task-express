import { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <LoginForm showRegisterForm={toggleLogin} />
      ) : (
        <RegisterForm showLoginForm={toggleLogin} />
      )}
    </>
  );
}
