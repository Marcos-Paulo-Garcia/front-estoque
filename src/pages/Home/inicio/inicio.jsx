import { Link } from "react-router-dom";
import "./inicio.css"; // se quiser um CSS separado opcional

function Inicio() {
  return (
    <div className="container">
      <h1>Escolha uma função</h1>

      <div className="botoes">
        <Link to="/cadastrar_produto">
          <button>Cadastrar produto</button>
        </Link>
        <Link to="/listar_produto">
          <button>Listar produtos</button>
        </Link>
        <Link to="/sale">
            <button>Vender</button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;