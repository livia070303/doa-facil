// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export const RegisterPage = () => {
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');


  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro to-vermelho-médio flex items-center justify-center">
      {/* Seção central */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-azul-escuro">Cadastre-se</h1>
        </div>
        {/* Formulário */}
        <form>
          {/* Primeira Linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            {/* CPF */}
            <div>
              <label htmlFor="cpf" className="block text-gray-700">CPF</label>
              <InputMask
                mask="999.999.999-99"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="cpf"
                    placeholder="000.000.000-00"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    required
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
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-gray-700">Telefone</label>
              <InputMask
                mask="(99) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    id="telefone"
                    placeholder="(99) 99999-9999"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    required
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
                required
              />
            </div>
            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmarSenha" className="block text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          {/* Subtítulo Endereço */}
          <h2 className="text-xl font-semibold text-azul-escuro mt-6">Endereço:</h2>
          {/* Linha: Logradouro e Cidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Logradouro */}
            <div>
              <label htmlFor="logradouro" className="block text-gray-700">Endereço</label>
              <input
                type="text"
                id="logradouro"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            {/* Cidade */}
            <div>
              <label htmlFor="cidade" className="block text-gray-700">Cidade</label>
              <input
                type="text"
                id="cidade"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
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
                required
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
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="cep"
                    placeholder="00000-000"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                )}
              </InputMask>
            </div>
            {/* Botão Cadastrar */}
            <div className="mt-2 md:mt-0">
              <button
                type="submit"
                className="w-full bg-azul-claro text-white font-semibold rounded-md p-2 hover:bg-azul-médio transition duration-300"
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


