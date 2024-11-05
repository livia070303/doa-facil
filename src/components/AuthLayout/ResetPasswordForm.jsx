import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <h1 className="font-bold text-[32px] text-center text-white mb-1 contrast:text-custom-yellow">Resetar Senha</h1>
      <h2 className="block text-[14px] text-center mb-5 text-white">A senha deverá conter pelo menos 8 caracteres (combinação de letras maiúsculas e minúsculas, números e símbolos).</h2>
      <form>
        {/* Campo Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-[14px] mb-1 text-white contrast:text-custom-yellow">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2.5 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
          />
        </div>
        {/* Campo Senha */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-[14px] mb-1 text-white contrast:text-custom-yellow">
            Nova Senha
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
            className="w-full p-2.5 pr-10 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
          />
          <button
            type="button"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="text-white contrast:text-custom-yellow" /> : <FaEye className="text-white contrast:text-custom-yellow" />}
          </button>
        </div>
        {/* Campo Confirmar Senha */}
        <div className="mb-4 relative">
          <label htmlFor="confirmPassword" className="block text-[14px] mb-1 text-white contrast:text-custom-yellow">
            Confirmar Senha
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full p-2.5 pr-10 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
          />
          <button
            type="button"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash className="text-white contrast:text-custom-yellow" /> : <FaEye className="text-white contrast:text-custom-yellow" />}
          </button>
        </div>
        {/* Botão Enviar */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2.5 bg-azul-claro text-white rounded-[5px] text-[16px] cursor-pointer transition duration-300 hover:bg-azul-médio contrast:bg-custom-yellow contrast:text-custom-black contrast:font-bold contrast:hover:bg-white"
          >
            Redefinir Senha
          </button>
        </div>
      </form>
      <div className="text-center mt-2.5">
        <span className="text-white text-[14px]">
          Lembrou a senha?{' '}
          <a href="/login" className="text-azul-claro no-underline hover:underline contrast:text-custom-yellow">
            Fazer Login
          </a>
        </span>
      </div>
    </>
  );
};

export default ResetPasswordForm;
