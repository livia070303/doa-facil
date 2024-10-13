import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';

const ChatWindow = ({ conversation, isFullScreen, toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const currentUserId = 1; // ID do usuário atual (ajuste conforme necessário)

  // Atualiza as mensagens quando a conversa mudar
  useEffect(() => {
    setMessages(conversation.messages || []);
  }, [conversation]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      senderId: currentUserId,
      senderName: 'Você',
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://via.placeholder.com/80x81',
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className={`bg-white ${isFullScreen ? 'h-full' : 'shadow-lg rounded-lg w-[350px] h-[500px]'} overflow-hidden flex flex-col`}>
      {/* Chat Header */}
      <div className="bg-blue-500 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Avatar size="40" round={true} src={conversation.avatar} />
          <h3 className="text-lg font-semibold">Chat com {conversation.name}</h3>
        </div>
        {isFullScreen ? null : (
          <button onClick={toggleChat} className="text-white text-xl">
            ×
          </button>
        )}
      </div>

      {/* Chat Body */}
      <div className="p-4 flex-1 overflow-y-auto">
        {/* Mensagens */}
        {messages.map((msg) => {
          const isSentByCurrentUser = msg.senderId === currentUserId;

          return (
            <div key={msg.id} className={`mb-4 flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-lg ${isSentByCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <p className="text-sm">{msg.message}</p>
                <div className="text-xs mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          );
        })}
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
            className="ml-3 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-400 transition-all duration-300"
            onClick={handleSendMessage}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
