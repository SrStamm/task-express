import { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const showLoginForm = () => {
    setIsLogin(true);
  };

  const showRegisterForm = () => {
    setIsLogin(false);
  };

  return (
    <>
      {isLogin ? (
        <LoginForm showRegisterForm={showRegisterForm} />
      ) : (
        <RegisterForm showLoginForm={showLoginForm} />
      )}
    </>
  );
}
