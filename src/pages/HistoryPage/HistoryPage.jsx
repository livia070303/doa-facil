import React, { useState } from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import DonationProducts from "../../components/DonationProducts";
import InterestProducts from "../../components/InterestProducts";

const HistoryPage = () => {
  const [productsForDonation, setProductsForDonation] = useState([
    { id: 1, name: 'Drone de brinquedo', status: 'DISPONÍVEL', imgSrc: '/Drone.png' },
    { id: 2, name: 'Fone de ouvido', status: 'DISPONÍVEL', imgSrc: '/headphones.png' },
    { id: 3, name: 'Ar condicionado Inverter Midea', status: 'DISPONÍVEL', imgSrc: '/air-conditioner.png' },
    { id: 4, name: 'Video Game PS', status: 'CEDIDO', imgSrc: '/video-game.png' },
    { id: 5, name: 'Computador', status: 'CEDIDO', imgSrc: '/computer.png' },
  ]);

  const productsOfInterest = [
    { id: 1, name: 'Monitor', imgSrc: '/lcd-monitor.png' },
    { id: 2, name: 'Celular', imgSrc: '/cellphone.png' },
    { id: 3, name: 'Controle remoto de PS4', imgSrc: '/h1-gamepad.png' },
  ];

  const removeAvailableProduct = (productId) => {
    const updatedProducts = productsForDonation.filter(
      (product) => !(product.id === productId && product.status === 'DISPONÍVEL')
    );
    setProductsForDonation(updatedProducts);
  };

  const editAvailableProduct = (productId) => {
    const productToEdit = productsForDonation.find((product) => product.id === productId);
    if (productToEdit) {
      const newName = prompt(`Editar nome do produto (atual: ${productToEdit.name}):`, productToEdit.name);
      if (newName) {
        setProductsForDonation(productsForDonation.map((product) =>
          product.id === productId ? { ...product, name: newName } : product
        ));
      }
    }
  };

  return (
    <HeaderAndFooterContainer>
      <HeaderAndFooter>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Histórico de Produtos para Doação */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Histórico de produtos para doação</h2>
          <DonationProducts
            products={productsForDonation}
            onRemove={removeAvailableProduct}
            onEdit={editAvailableProduct} // Passa a função de edição
          />

          {/* Histórico de Produtos de Interesse */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-12 mb-8">Histórico de produtos de interesse</h2>
          <InterestProducts products={productsOfInterest} />
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default HistoryPage;
