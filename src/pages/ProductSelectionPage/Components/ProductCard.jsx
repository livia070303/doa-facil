import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Ícone de estrela
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos CSS personalizados usando styled-components para o popup
const RatingBadge = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem;
  border-radius: 4px;
  background-color: ${({ rating }) => {
    if (rating >= 3.5) return 'green';
    if (rating >= 2.5) return 'orange';
    return 'red';
  }};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Popup = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// Componente principal do card do produto
const ProductCard = ({ imageUrl, title, badgeCondition, badgeQuantity, donor, _id}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Função para abrir o popup
  const handleAvatarClick = () => {
    setIsPopupOpen(true);
  };

  // Função para fechar o popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="bg-white p-4 rounded border shadow-sm relative">
       {/* Avatar do Doador na Parte Superior do Card */}
       <div className="flex items-center mb-4 relative">
        {/* Ícone de Avatar com Nota Sobreposta */}
        <div className="relative cursor-pointer" onClick={handleAvatarClick}>
          <img
            src={donor?.image || 'https://www.screenfeed.fr/wp-content/uploads/2013/10/default-avatar.png'}
            alt="Avatar do Doador"
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* Nota sobreposta na parte inferior centralizada do Avatar */}
          {/* <RatingBadge rating={donorRating}>
            {donorRating}
          </RatingBadge> */}
        </div>
      </div>

      {/* Imagem do Produto */}
      <img src={imageUrl} alt={title} className="w-full mb-4 rounded-md" />

      {/* Título do Produto */}
      <h3 className="text-gray-700 text-sm mb-2">{title}</h3>

      {/* Badge de Destaque */}
      {badgeCondition && (
        <div className={`bg-${badgeCondition.color}-500 text-white text-xs rounded px-2 py-1 inline-block mt-2`}>
          {badgeCondition.label}
        </div>
      )}
      <span>          </span>
      {badgeQuantity && (
        <div className={`bg-${badgeQuantity.color}-500 text-white text-xs rounded px-2 py-1 inline-block mt-2`}>
          Qtd: {badgeQuantity.label}
        </div>
      )}
      
      <Link to={`/product/${_id}`} key={_id}>
        <div className="text-gray-700 text-sm mb-2">
          <div className={`bg-yellow-500 text-white text-xs rounded px-2 py-1 inline-block mt-2`}>
            + Detalhes
          </div>
        </div>
      </Link>

      {/* Popup do Doador */}
      {isPopupOpen && (
        <Overlay onClick={handleClosePopup}>
          <Popup onClick={(e) => e.stopPropagation()}>
            {/* Nome do Doador */}
            <h2 className="text-xl font-bold mb-4">Informações do doador</h2>
            <p className="text-xl mb-4">Nome: {donor?.nomeCompleto}</p>

            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleClosePopup}
            >
              Falar com o Doador
            </button>
            <span>     </span>
           
            {/* Botão para fechar o popup */}
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleClosePopup}
            >
              Fechar
            </button>
          </Popup>
        </Overlay>
      )}
    </div>
  );
};

export default ProductCard;
