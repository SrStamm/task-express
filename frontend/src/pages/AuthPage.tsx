import { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";
import "./AuthPage.css";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const showLoginForm = () => {
    setIsLogin(true);
  };

  const showRegisterForm = () => {
    setIsLogin(false);
  };

  return (
    <main className="auth-layout">
      {isLogin ? (
        <LoginForm showRegisterForm={showRegisterForm} />
      ) : (
        <RegisterForm showLoginForm={showLoginForm} />
      )}
    </main>
  );
}
