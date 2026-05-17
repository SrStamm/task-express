import { useState } from "react";
import "./AuthPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
