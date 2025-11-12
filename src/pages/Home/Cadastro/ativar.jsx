import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./ativar.css";

function Ativar() {
  const location = useLocation();
  const navigate = useNavigate();

  const number = location.state?.number || "";
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  // Foca automaticamente no primeiro input quando a página carrega
  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/, "");
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    if (val && index < 3) inputsRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);

      if (index > 0) inputsRef.current[index - 1].focus();
    }
  };

  const ativarUsuario = async () => {
    if (!number) {
      setMessage("Número do WhatsApp não informado.");
      return;
    }

    if (code.some(d => !d)) {
      setMessage("Digite todos os 4 dígitos do código.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const res = await api.post("/user/ativar", { number , code: code.join("").toString()
      });

      if (res.status === 200) {
        setMessage("Usuário ativado com sucesso!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(res.data.message || "Erro ao ativar usuário.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form>
        <h2>Ativar Conta</h2>
        <p>Número do WhatsApp: {number}</p>

        <div className="code-inputs">
          {code.map((d, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={d}
              onChange={e => handleChange(e, i)}
              onKeyDown={e => handleKeyDown(e, i)}
              ref={el => (inputsRef.current[i] = el)}
            />
          ))}
        </div>

        <button type="button" onClick={ativarUsuario} disabled={loading}>
          {loading ? "Validando..." : "Ativar Conta"}
        </button>

        {message && (
          <p className={message.includes("sucesso") ? "success" : "erro"}>{message}</p>
        )}
      </form>
    </div>
  );
}

export default Ativar;