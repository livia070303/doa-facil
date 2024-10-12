import React, { useState, useEffect } from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";

const RequirementsListPage = () => {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos
  useEffect(() => {
    // Simula uma chamada de API para buscar os produtos
    const fetchProducts = () => {
      const updatedProducts = [
        {
          id: 1,
          name: 'Casaco de frio',
          size: 'Tamanho M',
          imgSrc: '/jacket.png',
        },
        {
          id: 2,
          name: 'Bolsa de mão',
          size: 'Tamanho G',
          imgSrc: '/handbag.png',
        },
        {
          id: 3,
          name: 'Estante de livros',
          size: 'Tamanho M',
          imgSrc: '/book-shelf.png',
        },
        {
          id: 4,
          name: 'Cadeira',
          quantity: '4 unidades',
          imgSrc: '/chair.png',
        },
        {
          id: 5,
          name: 'Mesa de escritório',
          size: 'Tamanho P',
          imgSrc: '/office-desk.png',
        },
        {
          id: 6,
          name: 'Monitor de 24 polegadas',
          quantity: '2 unidades',
          imgSrc: '/monitor.png',
        },
        {
          id: 7,
          name: 'Teclado mecânico',
          size: 'Padrão ABNT2',
          imgSrc: '/keyboard.png',
        },
        {
          id: 8,
          name: 'Mouse ergonômico',
          size: 'Tamanho Único',
          imgSrc: '/mouse.png',
        },
        {
          id: 9,
          name: 'Cadeira gamer',
          size: 'Tamanho G',
          imgSrc: '/gaming-chair.png',
        },
        {
          id: 10,
          name: 'Smartphone',
          quantity: '5 unidades',
          imgSrc: '/smartphone.png',
        },
      ];
      
      // Atualiza o estado com a lista de produtos
      setProducts(updatedProducts);
    };

    // Chama a função para buscar os produtos ao montar o componente
    fetchProducts();
  }, []); // O array de dependências vazio garante que o efeito execute apenas quando o componente for montado

  return (
    <HeaderAndFooterContainer>
      <HeaderAndFooter>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Título */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Produtos Necessitados</h2>

          {/* Lista de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg p-4 relative overflow-hidden">
                <img
                  src={product.imgSrc} // Usando imgSrc para carregar a imagem
                  alt={product.name}
                  className="w-full h-40 object-contain mx-auto"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <div className="text-red-500 font-medium mt-2">
                    {product.size || product.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default RequirementsListPage;
