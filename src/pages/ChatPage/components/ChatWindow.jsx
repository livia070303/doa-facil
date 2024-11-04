// src/pages/ChatPage/components/ChatWindow.jsx

import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { IoClose, IoChevronBackOutline, IoSend } from "react-icons/io5";

const ChatWindow = ({ conversation, isFullScreen, toggleChat, onMinimizeChat, onBack, isMobileView }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const currentUserId = 1; // ID do usuário atual

  // Atualiza as mensagens quando a conversa mudar
  useEffect(() => {
    if (conversation && conversation.messages) {
      setMessages(conversation.messages);
    } else {
      setMessages([]);
    }
  }, [conversation]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      senderId: currentUserId,
      senderName: 'Você',
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "/avatardayelle.png",
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className={`bg-white ${isFullScreen ? 'h-full m-2 rounded-lg' : 'flex-1'} overflow-hidden flex flex-col`}>
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-vermelho-médio to-azul-claro flex justify-between items-center p-4 border-b border-gray-300 contrast:bg-none contrast:bg-custom-black contrast:text-custom-yellow contrast:border-2 contrast:border-custom-yellow">
        <div className="flex items-center space-x-4">
          {/* Mostra o botão de voltar apenas no mobile e quando em tela cheia */}
          {(!isFullScreen || (isMobileView && isFullScreen)) && (
            <button onClick={onBack} className="text-white hover:text-azul-escuro contrast:text-custom-yellow contrast:hover:text-white">
              {/* Ícone de seta para voltar */}
              <IoChevronBackOutline className="text-2xl" />
            </button>
          )}
          <Avatar
            size="40"
            round={true}
            src={conversation?.avatar || 'https://via.placeholder.com/58x64'}
          />
          <h3 className="text-white text-lg font-semibold">
            {conversation ? ` ${conversation.name}` : ''}
          </h3>
        </div>
        {!isFullScreen && (
          <button onClick={toggleChat} className="text-white hover:text-azul-escuro text-xl contrast:text-custom-yellow contrast:hover:text-white">
           <IoClose className='text-2xl'/>
          </button>
        )}
      </div>

      {/* Chat Body */}
      <div className="p-4 flex-1 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((msg) => {
            const isSentByCurrentUser = msg.senderId === currentUserId;

            return (
              <div key={msg.id} className={`mb-4 flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${isSentByCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <p className="text-sm">{msg.message}</p>
                  <div className="text-xs mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">Nenhuma mensagem ainda.</p>
        )}
      </div>

      {/* Chat Footer - Input de Mensagem */}
      <div className="p-4 border-t border-gray-300">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            className="ml-3 bg-azul-claro text-white p-3 rounded-full hover:bg-azul-médio transition-all duration-300 contrast:bg-custom-yellow contrast:text-custom-black"
            onClick={handleSendMessage}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
