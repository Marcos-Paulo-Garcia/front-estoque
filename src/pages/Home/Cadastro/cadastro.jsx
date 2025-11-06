import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./style.css";

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnpj: "",
    number: "" // número WhatsApp
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user", formData);
      alert("Usuário resgistrado com sucesso!");
      console.log(response.data);

      // Redireciona para ativação, enviando número de telefone
      navigate("/ativar", { state: { number: formData.number } });

    } catch (error) {
      console.error(error);
      alert("Erro ao registrar usuário!");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="cnpj" placeholder="CNPJ" onChange={handleChange} />
        <input name="number" placeholder="WhatsApp Number" onChange={handleChange} />
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default Cadastro;
