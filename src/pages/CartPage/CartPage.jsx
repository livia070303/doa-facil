import React from "react"; 
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <HeaderAndFooterContainer>
      <HeaderAndFooter>
        <div className="container mx-auto p-4">
          {/* Título da Tabela */}
          <div className="flex justify-between items-center bg-white rounded shadow p-4 mb-6">
            <span className="text-black text-base font-normal">Produto</span>
            <span className="text-black text-base font-normal">Quantidade</span>
          </div>

          {/* Lista de Produtos */}
          <div className="flex flex-col gap-6">
            {[
              { name: "LCD Monitor", quantity: "01", imgSrc: "/lcd-monitor.png" },
              { name: "H1 Gamepad", quantity: "02", imgSrc: "/h1-gamepad.png" },
            ].map((product, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row justify-between items-center bg-white rounded shadow p-4 gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.imgSrc}
                    className="w-[50px] h-[39px] sm:w-[72px] sm:h-[56px]"
                    alt={product.name}
                  />
                  <span className="text-black text-base font-normal">{product.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border border-black/40 rounded flex items-center justify-center w-[72px] h-11">
                    <span className="text-black">{product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ações do Carrinho */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <Link to="/product-selection" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-12 py-4 border border-vermelho-médio rounded text-vermelho-médio font-bold hover:bg-vermelho-médio hover:text-white">
                Voltar para Doações
              </button>
            </Link>
            <Link to="/checkout" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-12 py-4 border border-azul-claro rounded text-azul-claro font-bold hover:bg-azul-claro hover:text-white">
                Fazer checkout
              </button>
            </Link>
          </div>
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default CartPage;
