import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./sale.css";

function Venda() {
  const [formData, setFormData] = useState({
    produtoId: "",
    quantidade: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await api.post("/sales", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Venda realizada com sucesso!");
      console.log(response.data);

      navigate("/inicio");
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.erro || "Erro ao registrar venda!";
      alert(message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registrar Venda</h1>

        <input
          name="produtoId"
          type="number"
          placeholder="ID do produto"
          value={formData.produtoId}
          onChange={handleChange}
          required
        />

        <input
          name="quantidade"
          type="number"
          placeholder="Quantidade"
          value={formData.quantidade}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirmar Venda</button>
      </form>
    </div>
  );
}

export default Venda;