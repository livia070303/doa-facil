// src/components/Chat/Chat.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatWindow from '../../pages/ChatPage/components/ChatWindow';
import ConversationsList from '../../pages/ChatPage/components/ConversationsList';
import { conversations } from '../../pages/ChatPage/data'; // Importe seus dados de conversas

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isChatListVisible, setIsChatListVisible] = useState(true); // Controla se a lista ou o chat está visível
  const navigate = useNavigate();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // Resetar para a lista de conversas quando o chat for aberto
    if (!isChatOpen) {
      setIsChatListVisible(true);
      setSelectedConversation(null);
    }
  };

  const openFullScreenChat = () => {
    navigate('/messenger');
  };

  // Função para selecionar uma conversa
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setIsChatListVisible(false); // Oculta a lista e mostra o chat
  };

  // Função para voltar à lista de conversas
  const handleBackToList = () => {
    setIsChatListVisible(true);
    setSelectedConversation(null);
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
        <div className="fixed bottom-16 right-4 z-40">
          <div className="shadow-lg rounded-lg w-[350px] h-[500px] overflow-hidden flex flex-col bg-white">
            {isChatListVisible ? (
              // Exibir a lista de conversas
              <ConversationsList
                conversations={conversations}
                onSelectConversation={handleSelectConversation}
                isMinimized={true}
              />
            ) : (
              // Exibir a janela de chat da conversa selecionada
              <ChatWindow
                conversation={selectedConversation}
                isFullScreen={false}
                toggleChat={toggleChat}
                onBack={handleBackToList} // Função para voltar à lista
              />
            )}
            {/* Link para ver o chat em tela cheia */}
            <div className="text-center mt-2">
              <button
                onClick={openFullScreenChat}
                className="text-blue-500 underline text-sm"
              >
                Ver em tela cheia
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
