import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./cadastrar_produto.css";

function CadastroProduto() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image_url: "",
    status: "active",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/product", formData);
      alert("Produto cadastrado com sucesso!");
      console.log(response.data);

      // Redireciona para a lista de produtos, por exemplo
      navigate("/inicio");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar produto!");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar Produto</h1>

        <input
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantidade"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="image_url"
          placeholder="URL da imagem (opcional)"
          value={formData.image_url}
          onChange={handleChange}
        />
        <button type="submit">Confirmar</button>
      </form>
      <div>
        <button className="botao-voltar" onClick={() => navigate("/inicio")}>
              ← Voltar
        </button>
      </div>
    </div>
    
  );
}

export default CadastroProduto;