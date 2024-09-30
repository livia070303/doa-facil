import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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

      {/* Lado direito com formulário de login */}
      <div className="bg-gradient-to-b from-azul-claro to-vermelho-médio w-full md:w-1/2 p-16 md:p-10 md:px-5 flex justify-center items-center">
        <div className="w-full max-w-full md:max-w-[350px]">
          <h1 className="font-bold text-[32px] text-center text-white mb-5">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[14px] mb-1 text-white">
                Usuário ou email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2.5 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-[14px] mb-1 text-white">
                Senha
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                className="w-full p-2.5 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />}
              </button>
            </div>
            <div className="text-right mb-5">
              <a href="#" className="text-white text-[14px] no-underline hover:underline">
                Esqueceu a senha
              </a>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-2.5 bg-azul-claro text-white rounded-[5px] text-[16px] cursor-pointer transition duration-300 hover:bg-azul-médio"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="text-center mt-2.5">
            <span className="text-white text-[14px]">
              Não tem conta?{' '}
              <a href="#" className="text-azul-claro no-underline hover:underline">
                Registrar
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
