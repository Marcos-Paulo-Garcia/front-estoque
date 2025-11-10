import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Home/Login/Login.jsx";
import Cadastro from "./pages/Home/Cadastro/cadastro.jsx";
import Ativar from "./pages/Home/Cadastro/ativar.jsx";
import "./index.css";
import Inicio from "./pages/Home/inicio/inicio.jsx";
import CadastroProduto from "./pages/Home/cadastrar_produto/cadastrar_produto.jsx";
import ListarProdutos from "./pages/Home/listar_produto/listar_produto.jsx";
import Venda from "./pages/Home/sale/sale.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ativar" element={<Ativar />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cadastrar_produto" element={<CadastroProduto />} />
        <Route path="/listar_produto" element={<ListarProdutos />} />
        <Route path="/sale" element={<Venda />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
