// src/components/Chat/Chat.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatWindow from '../../pages/ChatPage/components/ChatWindow';
import ConversationsList from '../../pages/ChatPage/components/ConversationsList';
import { conversations } from '../../pages/ChatPage/data'; // Importe seus dados de conversas
import { BsChatLeftText } from "react-icons/bs";

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
    setIsChatOpen(false); // Minimiza o chat flutuante
    navigate('/chat');
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
      {/* Botão flutuante para abrir o chat */}
      {!isChatOpen && (
        <div className="fixed bottom-4 rounded-full right-4 z-50">
          <button
            onClick={toggleChat}
            className="bg-vermelho-médio text-white p-6 rounded-full shadow-lg hover:bg-azul-claro transform transition-transform duration-300 hover:-translate-y-1"
          >
            <BsChatLeftText className="text-3xl" />
          </button>
        </div>
)}


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
                toggleChat={toggleChat} 
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
                className="text-white font-bold rounded-md shadow-lg bg-azul-claro hover:bg-azul-médio  p-2 px-6 mb-2 border"
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
