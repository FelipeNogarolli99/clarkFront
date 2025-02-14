import './modal.css';
import { FiX } from 'react-icons/fi';

export default function Modal({ fornecedor, onClose }) {
  if (!fornecedor) return null; 

  return (
    <div className='modal'>
      <div className='container'>
        <button className='close' onClick={onClose}>
          <FiX size={25} color="#FFF" />
          Voltar
        </button>

        <main>
          <h2>Detalhes do Fornecedor</h2>

          <div className='row'>
            <span>Nome: <i>{fornecedor.nome}</i></span>
          </div>

          <div className='row'>
            <span>Estado: <i>{fornecedor.estado}</i></span>
          </div>

          <div className='row'>
            <span>Custo kWh: <i>R$ {fornecedor.custo_kwh}</i></span>
            <span>Min. kWh: <i>{fornecedor.limite_min_kwh}</i></span>
          </div>

          <div className='row'>
            <span>Nº de Clientes: <i>{fornecedor.num_clientes}</i></span>
            <span>Avaliação: <i>{fornecedor.avaliacao} ⭐</i></span>
          </div>

          <h3>Informações Adicionais:</h3>
          <p>Fornecedor {fornecedor.nome} localizado em {fornecedor.estado} oferece energia a R$ {fornecedor.custo_kwh} por kWh.</p>
        </main>
      </div>
    </div>
  );
}
