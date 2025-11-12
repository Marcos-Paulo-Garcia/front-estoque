import { useState } from "react";
import api from "../../../services/api";
import {useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, password });

      console.log("Login bem-sucedido:", response.data);


      // salva o token
      localStorage.setItem("token", response.data.access_token);

      navigate("/inicio");
      alert("Login realizado com sucesso!");
    } catch (error) {
      console.erro("Erro ao logar:", erro);
      setErro("Email ou senha inválidos!");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        {erro && <p className="erro">{erro}</p>}
      </form>
    </div>
  );
}

export default Login;
