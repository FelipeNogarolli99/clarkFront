import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiMessageSquare } from "react-icons/fi";
import { toast } from "react-toastify";
import "./dashboard.css";
import axios from "axios";

export default function Consultorio() {
  const [consumo, setConsumo] = useState("");
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBuscar = async () => {
    const consumoValue = parseFloat(consumo);

    if(consumo <=0){
      toast.error("Por favor, informe um valor válido para o consumo (maior ou igual a 1).");
      console.log("erro")
      return;
    }
  
    // Verificação se o valor é um número válido e se é maior ou igual a zero
    if (isNaN(consumoValue) || consumoValue < 0) {
      toast.error("Por favor, informe um valor válido para o consumo (maior ou igual a 1).");
      console.log("erro")
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.get("https://clackback-production.up.railway.app/consultas");
      console.log(response.data); // Verifique a resposta da API
  
      if (response.status === 200 && response.data.fornecedores) {
        const fornecedoresFiltrados = response.data.fornecedores.filter(fornecedor => {
          return fornecedor.limite_min_kwh > consumoValue; // Filtrar com base no consumo
        });
  
        setFornecedores(fornecedoresFiltrados); // Atualizar o estado com os fornecedores filtrados
      } else {
        toast.error("Erro ao buscar fornecedores.");
      }
    } catch (error) {
      console.error("Erro ao buscar fornecedores", error);
      toast.error("Erro ao buscar fornecedores.");
    }
    setLoading(false);
  };
  

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Dashboard">
          <FiMessageSquare size={25} />
        </Title>
        <div className="input-group">
          <label htmlFor="consumo">Informe o consumo em KW/k</label>
          <input
            type="number"
            id="consumo"
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
            placeholder="Ex: 150 KW/k"
          />
          <button onClick={handleBuscar} disabled={loading}>
            {loading ? "Carregando..." : "Buscar Fornecedores"}
          </button>
        </div>
        <div className="fornecedores-list">
          {fornecedores.length > 0 ? (
            fornecedores.map((fornecedor) => (
              <div key={fornecedor.id} className="fornecedor-card">
                <h3>{fornecedor.nome}</h3>
                <img src={`path/to/images/${fornecedor.logo}`} alt={fornecedor.nome} />
                <p><strong>Estado:</strong> {fornecedor.estado}</p>
                <p><strong>Avaliação:</strong> {fornecedor.avaliacao}</p>
                <p><strong>Custo KW/k:</strong> {fornecedor.custo_kwh}</p>
                <p><strong>Nº de Clientes:</strong> {fornecedor.num_clientes}</p>
                <p><strong>Limite Mínimo KW/k:</strong> {fornecedor.limite_min_kwh}</p>
              </div>
            ))
          ) : (
            <p>Nenhum fornecedor encontrado para o consumo informado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
