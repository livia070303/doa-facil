// src/pages/ChatPage/ChatPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import ConversationsList from './components/ConversationsList';
import ChatWindow from './components/ChatWindow';
import { conversations } from './data';

export const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const navigate = useNavigate();

  const handleMinimizeChat = () => {
    navigate(-1); // Volta para a página anterior (chat flutuante)
  };

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer className="flex flex-col h-screen">
        <div className="flex flex-1">
          {/* Esquerda: Lista de Conversas */}
          <div className="w-full md:w-1/3 h-full">
            <ConversationsList
              conversations={conversations}
              onSelectConversation={setSelectedConversation}
              onMinimizeChat={handleMinimizeChat}
            />
          </div>
          {/* Direita: Janela do Chat */}
          <div className="w-full md:w-2/3 h-full">
            {selectedConversation ? (
              <ChatWindow
                conversation={selectedConversation}
                isFullScreen={true}
                onMinimizeChat={handleMinimizeChat}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Selecione uma conversa para começar</p>
              </div>
            )}
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
};

export default ChatPage;
