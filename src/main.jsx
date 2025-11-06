import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Home/Login/Login.jsx";
import Cadastro from "./pages/Home/Cadastro/cadastro.jsx";
import Ativar from "./pages/Home/Cadastro/ativar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ativar" element={<Ativar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
