import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/Auth/AuthPage";
import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
