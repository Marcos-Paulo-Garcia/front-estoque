import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./listar_produto.css";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await api.get("/product");
        setProdutos(response.data.produtos || []);
      } catch (error) {
        console.error(error);
        setErro("Erro ao carregar produtos!");
      }
    }

    fetchProdutos();
  }, []);

  const handleVerDetalhes = (id) => {
    navigate(`/produto/${id}`);
  };

  const handleEditar = (id) => {
    navigate(`/produto/editar/${id}`);
  };

  const handleInativar = async (id) => {
    if (window.confirm("Tem certeza que deseja inativar este produto?")) {
      try {
        await api.put(`/product/${id}`, { status: "inactive" });
        alert("Produto inativado com sucesso!");
        setProdutos((prev) =>
          prev.map((p) => (p.id === id ? { ...p, status: "inactive" } : p))
        );
      } catch (error) {
        console.error(error);
        alert("Erro ao inativar produto!");
      }
    }
  };

  return (
    <div className="container">
      <div className="lista-produtos">
        <h1>Meus Produtos</h1>

        {erro && <p className="erro">{erro}</p>}

        {produtos.length === 0 ? (
          <p className="erro">Nenhum produto encontrado.</p>
        ) : (
          produtos.map((produto) => (
            <div key={produto.id} className="produto-item">
              <span
                className={
                  produto.status === "inactive" ? "inativo" : "ativo"
                }
              >
                {produto.name}
              </span>

              <div className="botoes">
                <button onClick={() => handleEditar(produto.id)}>Editar</button>
                <button
                  className="inativar"
                  onClick={() => handleInativar(produto.id)}
                  disabled={produto.status === "inactive"}
                >
                  {produto.status === "inactive" ? "Inativo" : "Inativar"}
                </button>
                <button onClick={() => handleVerDetalhes(produto.id)}>
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListarProdutos;