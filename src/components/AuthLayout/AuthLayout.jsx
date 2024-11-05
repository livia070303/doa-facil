import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] lg:max-w-full bg-white shadow-lg overflow-hidden h-auto md:h-[500px] mx-auto lg:mx-0 my-auto min-h-screen">
      {/* Lado esquerdo com logo e frase */}
      <div className="bg-white flex text-center justify-center items-center w-full md:w-1/2 p-16 md:p-5 contrast:bg-custom-yellow">
        <div className="logo-container">
          <img
            src="/logoRecortado.png"
            alt="Logo da Empresa"
            className="max-w-[100px] md:max-w-[250px] mb-5 mx-auto"
          />
          <h2 className="font-bold text-[32px] text-azul-escuro contrast:text-custom-black">
            <strong>DoaFácil: </strong> Conectando Solidariedade
          </h2>
        </div>
      </div>

      {/* Lado direito com conteúdo dinâmico */}
      <div className="bg-gradient-to-b from-azul-claro to-vermelho-médio w-full md:w-1/2 p-16 md:p-10 md:px-5 flex justify-center items-center contrast:bg-none contrast:bg-custom-black relative">
        {/* Botão de Retorno */}
        <button
          onClick={() => navigate('/')}
          aria-label="Voltar para a página inicial"
          className="absolute top-4 right-4 text-azul-escuro hover:text-vermelho-médio focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azul-claro contrast:text-custom-yellow"
        >
          <FaArrowLeft className="text-2xl" aria-hidden="true" />
        </button>
        <div className="w-full max-w-full md:max-w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
