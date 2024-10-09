import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] bg-white shadow-lg overflow-hidden h-auto md:h-[500px] mx-auto my-auto min-h-screen">
      {/* Lado esquerdo com logo e frase */}
      <div className="bg-white flex text-center justify-center items-center w-full md:w-1/2 p-16 md:p-5">
        <div className="logo-container">
          <img
            src="/logoRecortado.png"
            alt="Logo da Empresa"
            className="max-w-[100px] md:max-w-[250px] mb-5 mx-auto"
          />
          <h2 className="font-bold text-[32px] text-azul-escuro">
            <strong>DoaFácil: </strong> Conectando Solidariedade
          </h2>
        </div>
      </div>

      {/* Lado direito com conteúdo dinâmico */}
      <div className="bg-gradient-to-b from-azul-claro to-vermelho-médio w-full md:w-1/2 p-16 md:p-10 md:px-5 flex justify-center items-center">
        <div className="w-full max-w-full md:max-w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
