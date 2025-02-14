
import { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import Title from '../../components/Title';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import './supplier.css';
import axios from 'axios';

export default function Home() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    async function fetchSuppliers() {
      try {
        const response = await axios.get('http://localhost:5000/api/fornecedores'); // Ajuste a URL para sua API
        setSuppliers(response.data);
        console.log(data)
        console.log(response)
      } catch (err) {
        setError('Erro ao carregar fornecedores');
      } finally {
        setLoading(false);
      }
    }

    fetchSuppliers();
  }, []);

  function toggleModal(item) {
    setSelectedSupplier(item);
    setModalOpen(!modalOpen);
  }

  if (loading) {
    return <p>Carregando fornecedores...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <Header />
      <div className='content'>
        <Title name="Consulta Fornecedores">
          <FiMessageSquare size={25} />
        </Title>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Busca Avançada" />
          <button className="search-btn">
            <FiSearch size={20} />
          </button>
        </div>

        <Link to="/new" className="new">
          <FiPlus color="#FFF" size={25} />
          Novo Fornecedor
        </Link>

        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Estado</th>
              <th scope="col">Custo kW/k</th>
              <th scope="col">Minimo kW/h</th>
              <th scope="col">N clientes</th>
              <th scope="col">Avaliação</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td data-label="Nome">{supplier.nome}</td>
                <td data-label="Estado">{supplier.estado}</td>
                <td data-label="Custo">R$ {supplier.custo_kwh}</td>
                <td data-label="Minimo"> {supplier.limite_min_kwh}</td>
                <td data-label="num">{supplier.num_clientes}</td>
                <td data-label="Avaliação">{supplier.avaliacao} ⭐</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: '#3583f6' }}
                    onClick={() => toggleModal(supplier)}
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                  <Link to={`/new/${supplier.id}`} className="action" style={{ backgroundColor: '#f6a935' }}>
                    <FiEdit2 color="#FFF" size={17} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && <Modal fornecedor={selectedSupplier} onClose={toggleModal} />}
    </div>
  );
}
