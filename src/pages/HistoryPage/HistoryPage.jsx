import React from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import DonationProducts from "../../components/DonationProducts";  // Caminho atualizado para importar o componente DonationProducts
import InterestProducts from "../../components/InterestProducts";  // Caminho atualizado para importar o componente InterestProducts

const HistoryPage = () => {
  // Produtos para Doação
  const productsForDonation = [
    { id: 1, name: 'Drone de brinquedo', status: 'DISPONÍVEL', imgSrc: '/drone.png' },
    { id: 2, name: 'Fone de ouvido', status: 'DISPONÍVEL', imgSrc: '/headphones.png' },
    { id: 3, name: 'Ar condicionado Inverter Midea', status: 'DISPONÍVEL', imgSrc: '/air-conditioner.png' },
    { id: 4, name: 'Video Game PS', status: 'CEDIDO', imgSrc: '/video-game.png' },
    { id: 5, name: 'Computador', status: 'CEDIDO', imgSrc: '/computer.png' },
  ];

  // Produtos de Interesse
  const productsOfInterest = [
    { id: 1, name: 'Monitor', imgSrc: '/lcd-monitor.png' },
    { id: 2, name: 'Celular', imgSrc: '/cellphone.png' },
    { id: 3, name: 'Controle remoto de PS4', imgSrc: '/h1-gamepad.png' },
  ];

  return (
    <HeaderAndFooterContainer>
      <HeaderAndFooter>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Histórico de Produtos para Doação */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Histórico de produtos para doação</h2>
          <DonationProducts products={productsForDonation} />  {/* Chamando o componente DonationProducts */}

          {/* Histórico de Produtos de Interesse */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-12 mb-8">Histórico de produtos de interesse</h2>
          <InterestProducts products={productsOfInterest} />  {/* Chamando o componente InterestProducts */}
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default HistoryPage;
