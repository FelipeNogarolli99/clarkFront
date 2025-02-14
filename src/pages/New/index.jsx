import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUserPlus, FiEdit, FiSave } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./new.css";

export default function NewSupplier() {
  const [isEditing, setIsEditing] = useState(true);

  const [supplierData, setSupplierData] = useState({
    nome: "",
    estado: "",
    custo_kwh: "",
    limite_min_kwh: "",
    num_clientes: "",
    avaliacao: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/fornecedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplierData),
      });
  
      if (response.ok) {
        const result = await response.json();
        toast.success("Fornecedor cadastrado com sucesso!");
        setIsEditing(false);
        console.log("Fornecedor cadastrado:", result);
      } else {
        toast.error("Erro ao cadastrar fornecedor.");
      }
    } catch (error) {
      console.error("Erro ao salvar fornecedor:", error);
      toast.error("Erro na comunicação com o servidor.");
    }
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Cadastro de Fornecedor">
          <FiUserPlus size={25} />
        </Title>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="supplier-card">
          <div className="supplier-header">
            <FiUserPlus size={50} />
            <h2>Novo do Fornecedor</h2>
          </div>

          <div className="supplier-info">
            <div className="input-group">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={supplierData.nome}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                value={supplierData.estado}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
            <label>Custo kW/h:</label>
            <input
                type="number"
                name="custo_kwh"
                value={supplierData.custo_kwh}
                onChange={handleChange}
                disabled={!isEditing}
            />
            </div>

            <div className="input-group">
            <label>Limite Mínimo kW/h:</label>
            <input
                type="number"
                name="limite_min_kwh"
                value={supplierData.limite_min_kwh}
                onChange={handleChange}
                disabled={!isEditing}
            />
            </div>

            <div className="input-group">
            <label>Número de Clientes:</label>
            <input
                type="number"
                name="num_clientes"
                value={supplierData.num_clientes}
                onChange={handleChange}
                disabled={!isEditing}
            />
            </div>

            <div className="input-group">
            <label>Avaliação:</label>
            <input
                type="number"
                step="0.1"
                name="avaliacao"
                value={supplierData.avaliacao}
                onChange={handleChange}
                disabled={!isEditing}
            />
            </div>

            
          </div>

          <div className="supplier-actions">
            {isEditing ? (
              <button className="btn-save" onClick={handleSave}>
                <FiSave size={20} /> Salvar
              </button>
            ) : (
              <button
                className="btn-edit"
                onClick={() => setIsEditing(true)}
              >
                <FiEdit size={20} /> Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
