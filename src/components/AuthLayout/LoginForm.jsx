// src/components/LoginForm.jsx
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { z } from 'zod'   
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const LoginForm = () => {

  const { handleLogin } = React.useContext(AuthContext)

  const [showPassword, setShowPassword] = React.useState(false);

  const { handleSubmit, register } = useForm({
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <h1 className="font-bold text-[32px] text-center text-white mb-5 contrast:text-custom-yellow">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-[14px] mb-1 text-white contrast:text-custom-yellow">
            Usuário ou email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email')}
            className="w-full p-2.5 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-[14px] mb-1 text-white contrast:text-custom-yellow">
            Senha
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            {...register('password')}
            className="w-full p-2.5 border-b-2 border-b-white bg-transparent text-white text-[16px] focus:outline-none focus:border-b-azul-claro"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="text-white contrast:text-custom-yellow" /> : <FaEye className="text-white contrast:text-custom-yellow" />}
          </button>
        </div>
        <div className="text-right mb-5">
          <a href="/reset-password" className="text-white text-[14px] no-underline hover:underline">
            Esqueceu a senha
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2.5 bg-azul-claro text-white rounded-[5px] text-[16px] cursor-pointer transition duration-300 hover:bg-azul-médio contrast:bg-custom-yellow contrast:text-custom-black contrast:font-bold contrast:hover:bg-white"
          >
            Entrar
          </button>
        </div>
      </form>
      <div className="text-center mt-2.5">
        <span className="text-white text-[14px]">
          Não tem conta?{' '}
          <Link to="/register" className="text-azul-claro no-underline hover:underline contrast:text-custom-yellow">
            Registrar
          </Link>
        </span>
      </div>
    </>
  );
};

export default LoginForm;
