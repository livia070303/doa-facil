import React, { useState } from 'react';
import Avatar from 'react-avatar';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Estado para controlar se o chat está aberto ou minimizado

  const messages = [
    {
      id: 1,
      name: 'Emily',
      time: '5s',
      message: 'Olá🌼 Boa tarde....',
      avatar: 'https://via.placeholder.com/80x81',
    },
    {
      id: 2,
      name: 'Caio',
      time: '5m',
      message: 'Já conseguiu o item que você estava precisando?',
      avatar: 'https://via.placeholder.com/80x81',
      unread: 4,
    },
    {
      id: 3,
      name: 'Patrícia',
      time: '2h',
      message: '📸 Olha essa nova foto do produto....',
      avatar: 'https://via.placeholder.com/80x81',
      unread: 1,
    },
    {
      id: 4,
      name: 'Paulo',
      time: '1d',
      message: 'É uma ótima ideia. Vamos deixar para essa data...',
      avatar: 'https://via.placeholder.com/80x81',
    },
  ];

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Alterna entre aberto e minimizado
  };

  return (
    <>
      {/* Botão flutuante para abrir/minimizar o chat */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300"
        >
          {isChatOpen ? 'Minimizar' : 'Chat'}
        </button>
      </div>

      {/* Chat Suspenso */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-[350px] h-[500px] bg-white shadow-lg rounded-lg z-40 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
              <Avatar size="40" round={true} src="https://via.placeholder.com/58x64" />
              <h3 className="text-lg font-semibold">Chat com Dayelle</h3>
            </div>
            <button onClick={toggleChat} className="text-white text-xl">
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Mensagens */}
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar size="40" round={true} src={msg.avatar} />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{msg.name}</h4>
                    <p className="text-xs text-gray-500">{msg.message}</p>
                  </div>
                  <div className="text-xs text-gray-500">{msg.time}</div>
                  {msg.unread && (
                    <div className="ml-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                      {msg.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Footer - Input de Mensagem */}
          <div className="p-4 border-t border-gray-300">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Digite uma mensagem"
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="ml-3 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-400 transition-all duration-300">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
