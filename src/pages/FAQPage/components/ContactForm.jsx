// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  // Estados para os campos do formulário
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log('Formulário enviado:', { email, subject, message });
    // Limpar os campos após o envio
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="max-w-4xl mx-auto p-6 mb-12 bg-vermelho-claro/30 border rounded-lg shadow-md contrast:bg-purple-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Ainda tem dúvidas?</h2>
      <p className="mb-6 text-center text-gray-600 contrast:text-custom-black">
        Se você não encontrou a resposta para sua pergunta, envie-nos uma mensagem!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 contrast:text-custom-black">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-gray-700 contrast:text-custom-black">
            Assunto:
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 contrast:text-custom-black">
            Mensagem/Dúvida:
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-vermelho-médio text-white font-bold px-6 py-2 rounded-md hover:bg-vermelho-escuro transition duration-300 contrast:bg-custom-yellow contrast:text-custom-black contrast:border contrast:border-custom-black"
          >
            Enviar Pergunta
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
