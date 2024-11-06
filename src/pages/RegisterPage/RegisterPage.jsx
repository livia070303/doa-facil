import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { z } from 'zod';
import { AuthContext } from '../../contexts/AuthContext';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrAttachment } from 'react-icons/gr';
import { FiX } from 'react-icons/fi';

const registerSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres'),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  logradouro: z.string().min(3, 'O logradouro deve ter pelo menos 3 caracteres'),
  cidade: z.string().min(3, 'A cidade deve ter pelo menos 3 caracteres'),
  estado: z.string().length(2, 'O estado deve ter 2 caracteres'),
  cep: z.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não correspondem',
  path: ['confirmPassword'],
});

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { regionOptions } = useUser();
  const { handleRegister } = useContext(AuthContext);

  // Estado para a foto de perfil
  const [fotoPerfil, setFotoPerfil] = useState(null);

  // Estados para a visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro to-vermelho-médio flex items-center justify-center contrast:bg-none contrast:bg-custom-black">
      <div className="m-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl relative">
        <button
          onClick={() => navigate('/')}
          aria-label="Voltar para a página inicial"
          className="absolute top-4 right-4 text-azul-claro hover:text-azul-escuro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azul-claro contrast:text-custom-black"
        >
          <FaArrowLeft className="text-2xl" aria-hidden="true" />
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-azul-escuro contrast:text-custom-black">Cadastre-se</h1>
        </div>

        <form onSubmit={handleSubmit(handleRegister)} noValidate>
          {/* Primeira Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-black font-bold">Nome</label>
              <input
                type="text"
                id="nome"
                className={`mt-1 w-full border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                {...register('nome')}
                aria-invalid={errors.nome ? 'true' : 'false'}
                aria-describedby={errors.nome ? 'nome-error' : undefined}
              />
              {errors.nome && <span id="nome-error" className="text-red-500">{errors.nome.message}</span>}
            </div>

            <div>
              <label htmlFor="cpf" className="block text-black font-bold">CPF</label>
              <InputMask
                mask="999.999.999-99"
                {...register('cpf')}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="cpf"
                    placeholder="000.000.000-00"
                    className={`mt-1 w-full border ${errors.cpf ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                    aria-invalid={errors.cpf ? 'true' : 'false'}
                    aria-describedby={errors.cpf ? 'cpf-error' : undefined}
                  />
                )}
              </InputMask>
              {errors.cpf && <span id="cpf-error" className="text-red-500">{errors.cpf.message}</span>}
            </div>
          </div>

          {/* Segunda Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-black font-bold">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`mt-1 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="text-red-500">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-black font-bold">Telefone</label>
              <InputMask
                mask="(99) 99999-9999"
                {...register('phone')}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    id="phone"
                    placeholder="(99) 99999-9999"
                    className={`mt-1 w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                )}
              </InputMask>
              {errors.phone && <span id="phone-error" className="text-red-500">{errors.phone.message}</span>}
            </div>
          </div>

          {/* Terceira Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           {/* Campo de Senha */}
           <div>
              <label htmlFor="password" className="block text-black font-bold">Senha</label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                  {...register('password')}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && <span id="password-error" className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Campo de Confirmação de Senha */}
            <div>
              <label htmlFor="confirmPassword" className="block text-black font-bold">Confirmar Senha</label>
              <div className="mt-1 relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                  {...register('confirmPassword')}
                  aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                  aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  aria-label={showConfirmPassword ? 'Esconder confirmação de senha' : 'Mostrar confirmação de senha'}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && <span id="confirmPassword-error" className="text-red-500">{errors.confirmPassword.message}</span>}
            </div>
          </div>

          {/* Campo de Upload de Foto de Perfil */}
          <div className="mt-4">
            <label htmlFor="fotoPerfil" className="block text-gray-700 font-bold">Foto de Perfil</label>
            <div className="mt-1 flex items-center">
              <label
                htmlFor="fotoPerfil"
                className="flex items-center px-4 py-2 bg-white text-azul-claro rounded-md shadow-md tracking-wide border border-gray-300 cursor-pointer hover:bg-azul-claro hover:text-white contrast:text-custom-black contrast:hover:bg-custom-yellow"
              >
                <GrAttachment className="text-2xl mr-2" />
                Escolher arquivo
              </label>
              {fotoPerfil && (
                <span className="ml-4 text-gray-700">{fotoPerfil.name}</span>
              )}
            </div>
            <input
              type="file"
              id="fotoPerfil"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFotoPerfil(e.target.files[0])}
            />
          </div>

          {/* Pré-visualização da Imagem com Botão de Remoção */}
          {fotoPerfil && (
            <div className="mt-4 relative">
              <img
                src={URL.createObjectURL(fotoPerfil)}
                alt="Pré-visualização da Foto de Perfil"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <button
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full p-1 text-gray-700 hover:text-red-500 focus:outline-none"
                onClick={() => setFotoPerfil(null)}
                aria-label="Remover imagem selecionada"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Subtítulo Endereço */}
          <h2 className="text-xl font-semibold text-azul-escuro mt-6">Endereço</h2>

          {/* Linha: Logradouro e Cidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="logradouro" className="block text-black font-bold">Rua</label>
              <input
                type="text"
                id="logradouro"
                className={`mt-1 w-full border ${errors.logradouro ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                {...register('logradouro')}
                aria-invalid={errors.logradouro ? 'true' : 'false'}
                aria-describedby={errors.logradouro ? 'logradouro-error' : undefined}
              />
              {errors.logradouro && <span id="logradouro-error" className="text-red-500">{errors.logradouro.message}</span>}
            </div>

            <div>
              <label htmlFor="cidade" className="block text-black font-bold">Cidade</label>
              <input
                type="text"
                id="cidade"
                className={`mt-1 w-full border ${errors.cidade ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                {...register('cidade')}
                aria-invalid={errors.cidade ? 'true' : 'false'}
                aria-describedby={errors.cidade ? 'cidade-error' : undefined}
              />
              {errors.cidade && <span id="cidade-error" className="text-red-500">{errors.cidade.message}</span>}
            </div>
          </div>

          {/* Linha: Estado e CEP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label htmlFor="estado" className="block text-black font-bold">Estado</label>
              <select
                id="estado"
                className={`mt-1 w-full border ${errors.estado ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                {...register('estado')}
                aria-invalid={errors.estado ? 'true' : 'false'}
                aria-describedby={errors.estado ? 'estado-error' : undefined}
              >
                <option value="">Selecione um estado</option>
                {regionOptions.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
              {errors.estado && <span id="estado-error" className="text-red-500">{errors.estado.message}</span>}
            </div>

            <div>
              <label htmlFor="cep" className="block text-black font-bold">CEP</label>
              <InputMask
                mask="99999-999"
                {...register('cep')}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="cep"
                    placeholder="00000-000"
                    className={`mt-1 w-full border ${errors.cep ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azul-claro`}
                    aria-invalid={errors.cep ? 'true' : 'false'}
                    aria-describedby={errors.cep ? 'cep-error' : undefined}
                  />
                )}
              </InputMask>
              {errors.cep && <span id="cep-error" className="text-red-500">{errors.cep.message}</span>}
            </div>
          </div>
           {/* Botão Cadastrar */}
           <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-azul-claro text-white font-semibold rounded-md p-2 hover:bg-azul-médio shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azul-claro contrast:bg-custom-yellow contrast:text-custom-black contrast:border contrast:border-custom-black"
            >
              Cadastrar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
