import React, { useState } from 'react';
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import { RelatedProducts } from './Components/RelatedProducts.jsx';

export function ProductPage() {
  // Lista de imagens do produto
  const images = [
    "/cadeira.jpg",  // Imagem principal
    "/cadeira2.jpg",    // Miniatura 1
    "/cadeira-medidas.jpg",    // Miniatura 2
    "/cadeira-detalhe.jpg",    // Miniatura 3
    "/cadeira-tecido.jpg"      // Miniatura 4
  ];

  // Estado para armazenar a imagem atualmente exibida
  const [mainImage, setMainImage] = useState(images[0]);

  // Estado para o campo de condição do produto
  const [productCondition, setProductCondition] = useState('usado');

  // Função para atualizar a imagem principal ao clicar em uma miniatura
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Função para lidar com a seleção da condição do produto
  const handleConditionChange = (event) => {
    setProductCondition(event.target.value);
  };

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer>
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-white shadow-lg">
          {/* Título do Produto */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 text-center">
            Cadeira em MDF Assento Estofado Bege e Encosto com Tela
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Imagens do Produto */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
              {/* Imagem Principal */}
              <img
                src={mainImage}
                alt="Produto principal"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />

              {/* Miniaturas */}
              <div className="flex gap-2 mt-4">
                {images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className={`w-12 h-12 md:w-16 md:h-16 object-cover cursor-pointer border-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 ${mainImage === image ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleThumbnailClick(image)}  // Atualiza a imagem principal
                  />
                ))}
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">CADEIRA DE MADEIRA</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Esta cadeira de jantar de madeira combina estilo e durabilidade. Feita com madeira de alta qualidade, 
                ela oferece um assento estofado em tecido bege, garantindo conforto durante longos períodos à mesa. 
                O encosto em tela proporciona uma sensação de leveza e elegância ao design, sendo perfeita para 
                ambientes sofisticados ou modernos. Com estrutura robusta e acabamento natural, esta cadeira é ideal 
                para quem busca um toque de charme e funcionalidade para a sua sala de jantar.
              </p>

              <a href="#" className="text-sm text-teal-600 underline mb-4">Saber mais sobre o produto</a>

              {/* Estado do Produto */}
              <p className="text-sm font-medium text-gray-800 mb-4">Condição:</p>
              <div className="flex gap-4 md:gap-8">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="novo"
                    checked={productCondition === 'novo'}
                    onChange={handleConditionChange}
                    className="text-gray-800"
                  />
                  <span className="text-sm md:text-base text-gray-800">Novo</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="usado"
                    checked={productCondition === 'usado'}
                    onChange={handleConditionChange}
                    className="text-gray-800"
                  />
                  <span className="text-sm md:text-base text-gray-800">Usado</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="com-defeito"
                    checked={productCondition === 'com-defeito'}
                    onChange={handleConditionChange}
                    className="text-gray-800"
                  />
                  <span className="text-sm md:text-base text-gray-800">Com Defeito</span>
                </label>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col gap-4 mt-8">
                <button className="w-full py-2 md:py-3 bg-red-600 hover:bg-red-500 text-white rounded-md text-sm md:text-lg transition-colors duration-300">
                  EU QUERO!
                </button>
                <button className="w-full py-2 md:py-3 border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-500 rounded-md text-sm md:text-lg transition-colors duration-300">
                  Adicionar ao sacola
                </button>
              </div>
            </div>
          </div>

          {/* Produtos Relacionados */}
          <div className="mt-12">
                <RelatedProducts/>
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
}
