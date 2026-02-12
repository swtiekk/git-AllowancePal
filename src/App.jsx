import { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import "./styles/main.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <AdminLogin setPage={setPage} />}
      {page === "dashboard" && <Dashboard setPage={setPage} />}
    </>
  );
}

export default App;