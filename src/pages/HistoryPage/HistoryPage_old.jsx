import React, { useState } from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import DonationProducts from "../../components/DonationProducts";
import InterestProducts from "../../components/InterestProducts";


const HistoryPage = () => {
    // Estado para Produtos para Doação
    const [productsForDonation, setProductsForDonation] = useState([
        { id: 1, name: 'Drone de brinquedo', status: 'DISPONÍVEL', imgSrc: '/Drone.png' },
        { id: 2, name: 'Fone de ouvido', status: 'DISPONÍVEL', imgSrc: '/headphones.png' },
        { id: 3, name: 'Ar condicionado Inverter Midea', status: 'DISPONÍVEL', imgSrc: '/air-conditioner.png' },
        { id: 4, name: 'Video Game PS', status: 'CEDIDO', imgSrc: '/video-game.png' },
        { id: 5, name: 'Computador', status: 'CEDIDO', imgSrc: '/computer.png' },
    ]);

    // Produtos de Interesse
    const productsOfInterest = [
        { id: 1, name: 'Monitor', imgSrc: '/lcd-monitor.png' },
        { id: 2, name: 'Celular', imgSrc: '/cellphone.png' },
        { id: 3, name: 'Controle remoto de PS4', imgSrc: '/h1-gamepad.png' },
    ];


    // Função para remover produtos disponíveis
    const removeAvailableProduct = (productId) => {
        const updatedProducts = productsForDonation.filter(
            (product) => !(product.id === productId && product.status === 'DISPONÍVEL')
        );
        setProductsForDonation(updatedProducts);
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
