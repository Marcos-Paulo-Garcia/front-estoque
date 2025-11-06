import { Link } from "react-router-dom";
import "./Home.css"; // se quiser um CSS separado opcional

function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo ao Sistema</h1>

      <div className="botoes">
        <Link to="/login">
          <button>Ir para Login</button>
        </Link>
        <Link to="/cadastro">
          <button>Ir para Cadastro</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
