import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { z } from 'zod'
import { AuthContext } from '../../contexts/AuthContext';

const registerSchema = z.object({
  nome: z.string().min(3),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
  logradouro: z.string().min(3),
  cidade: z.string().min(3),
  estado: z.string().length(2),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"), 
})

export const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  })
  
  const { 
   handleRegister
  } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro to-vermelho-médio flex items-center justify-center">
      {/* Seção central */}
      <div className="m-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-azul-escuro">Cadastre-se</h1>
        </div>
        {/* Formulário */}
        <form onSubmit={handleSubmit(handleRegister)}>
          {/* Primeira Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                {...register('nome')}
                />
            </div>
            {/* CPF */}
            <div>
              <label htmlFor="cpf" className="block text-gray-700">CPF</label>
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
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    
                  />
                )}
              </InputMask>
            </div>
          </div>
          {/* Segunda Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-gray-700">Telefone</label>
              <InputMask
                mask="(99) 99999-9999"
                {...register('phone')}

              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    id="telefone"
                    placeholder="(99) 99999-9999"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                  />
                )}
              </InputMask>
            </div>
          </div>
          

         
          {/* Terceira Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Senha */}
            <div>
              <label htmlFor="senha" className="block text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                {...register('password')}
              />
            </div>
            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmarSenha" className="block text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                {...register('confirmPassword')}
                />
            </div>
          </div>
          {/* Subtítulo Endereço */}
          <h2 className="text-xl font-semibold text-azul-escuro mt-6">Endereço:</h2>
          {/* Linha: Logradouro e Cidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Logradouro */}
            <div>
              <label htmlFor="logradouro" className="block text-gray-700">Rua</label>
              <input
                type="text"
                id="logradouro"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              {...register('logradouro')}
              />
            </div>
            {/* Cidade */}
            <div>
              <label htmlFor="cidade" className="block text-gray-700">Cidade</label>
              <input
                type="text"
                id="cidade"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                {...register('cidade')}
              />
            </div>
          </div>
          {/* Linha: Estado, CEP e Botão */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 items-end">
            {/* Estado */}
            <div>
              <label htmlFor="estado" className="block text-gray-700">Estado</label>
              <select
                id="estado"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                {...register('estado')}
              >
                <option value="">Selecione</option>
                <option value="AC">AC - Acre</option>
                <option value="AL">AL - Alagoas</option>
                <option value="AP">AP - Amapá</option>
                <option value="AM">AM - Amazonas</option>
                <option value="BA">BA - Bahia</option>
                <option value="CE">CE - Ceará</option>
                <option value="DF">DF - Distrito Federal</option>
                <option value="ES">ES - Espírito Santo</option>
                <option value="GO">GO - Goiás</option>
                <option value="MA">MA - Maranhão</option>
                <option value="MT">MT - Mato Grosso</option>
                <option value="MS">MS - Mato Grosso do Sul</option>
                <option value="MG">MG - Minas Gerais</option>
                <option value="PA">PA - Pará</option>
                <option value="PB">PB - Paraíba</option>
                <option value="PR">PR - Paraná</option>
                <option value="PE">PE - Pernambuco</option>
                <option value="PI">PI - Piauí</option>
                <option value="RJ">RJ - Rio de Janeiro</option>
                <option value="RN">RN - Rio Grande do Norte</option>
                <option value="RS">RS - Rio Grande do Sul</option>
                <option value="RO">RO - Rondônia</option>
                <option value="RR">RR - Roraima</option>
                <option value="SC">SC - Santa Catarina</option>
                <option value="SP">SP - São Paulo</option>
                <option value="SE">SE - Sergipe</option>
                <option value="TO">TO - Tocantins</option>
              </select>
            </div>
            {/* CEP */}
            <div>
              <label htmlFor="cep" className="block text-gray-700">CEP</label>
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
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                  />
                )}
              </InputMask>
            </div>
            {/* Botão Cadastrar */}
            <div className="mt-2 md:mt-0">
              <button
                type="submit"
                className="w-full bg-azul-claro text-white font-semibold rounded-md p-2 hover:bg-azul-médio shadow-md transition duration-300"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// {/* Campo de Upload de Foto de Perfil */}
// <div className="mt-4">
// <label htmlFor="fotoPerfil" className="block text-gray-700">Foto de Perfil</label>
// {/* Contêiner para o botão personalizado */}
//  <div className="mt-1 flex items-center">
//   <label
//     htmlFor="fotoPerfil"
//     className="flex items-center px-4 py-2 bg-white text-azul-claro rounded-md shadow-md tracking-wide border  border-gray-300 cursor-pointer hover:bg-azul-claro hover:text-white"
//   >
//     <GrAttachment className="text-2xl mr-2" />
//     Escolher arquivo
//   </label>
// {/* Mostrar o nome do arquivo selecionado */}
//   {fotoPerfil && (
//     <span className="ml-4 text-gray-700">{fotoPerfil.name}</span>
//   )}
// </div>
// <input
//   type="file"
//   id="fotoPerfil"
//   accept="image/*"
//   className="hidden"
//   onChange={(e) => setFotoPerfil(e.target.files[0])}
// />
// </div>

 
        //  {/* Pré-visualização da Imagem com Botão de Remoção */}
        //  {fotoPerfil && (
        //   <div className="mt-4 relative">
        //     <img
        //       src={URL.createObjectURL(fotoPerfil)}
        //       alt="Pré-visualização da Foto de Perfil"
        //       className="w-32 h-32 object-cover rounded-full mx-auto"
        //     />
        //     <button
        //       type="button"
        //       className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full p-1 text-gray-700 hover:text-red-500 focus:outline-none"
        //       onClick={() => setFotoPerfil(null)}
        //       aria-label="Remover imagem selecionada"
        //     >
        //       <FiX className="w-5 h-5" />
        //     </button>
        //   </div>
        // )}


