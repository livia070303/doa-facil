import React, { useState } from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";

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
              <div key={index} className="flex justify-between items-center bg-white rounded shadow p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.imgSrc}
                    className="w-[50px] h-[39px]"
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
          <div className="flex justify-between items-center mt-8">
            <button className="px-12 py-4 border border-black/50 rounded text-black font-medium">
              Return To Shop
            </button>
            <button className="px-12 py-4 border border-black/50 rounded text-black font-medium">
              Update Cart
            </button>
          </div>
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default CartPage;
