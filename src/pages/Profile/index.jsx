import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUser, FiEdit, FiSave } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./profile.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);


  const [userData, setUserData] = useState({
    nome: "Felipe Macedo",
    email: "Felipe.macedo@email.com",
    telefone: "(41) 91234-5678",
    endereco: "Av sete de setembro, 123 - Curitiba, PR",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu Perfil">
          <FiUser size={25} />
        </Title>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="perfil-card">
          <div className="perfil-header">
            <FiUser size={50} />
            <h2>Informações do Usuário</h2>
          </div>

          <div className="perfil-info">
            <div className="input-group">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={userData.nome}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label>Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={userData.telefone}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                value={userData.endereco}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="perfil-actions">
            {isEditing ? (
              <button className="btn-save" onClick={handleSave}>
                <FiSave size={20} /> Salvar
              </button>
            ) : (
              <button
                className="btn-edit"
                onClick={() => setIsEditing(true)}
              >
                <FiEdit size={20} /> Editar Perfil
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
