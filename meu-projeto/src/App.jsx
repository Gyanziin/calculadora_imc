import React, { useState } from "react";
import "./App.css";
import Balanca from "./images/balanca.jpg";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularIMC = (e) => {
    e.preventDefault();
  
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    const imcFormatado = imcCalculado.toFixed(1).substring(0, 3);
    setImc(imcFormatado);
    setMostrarResultado(true);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Calculadora de IMC</h1>
      </header>
      <div className="conteudo">
        <img className="imagem" src={Balanca} alt="Balança" />
        <form onSubmit={calcularIMC}>
          <div className="form-group">
            <label className="label">Altura (cm):</label>
            <input
              className="input"
              placeholder="ex: 1.70"
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
            <label className="label">Peso (kg):</label>
            <input
              className="input"
              placeholder="ex: 60.5"
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <button type="submit" className="click">
            Calcular IMC
          </button>
          <button type="reset" className="reset">
            Limpar
          </button>

          {mostrarResultado && (
            <div className="resposta">
              <h2>Seu IMC é {imc}</h2>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
