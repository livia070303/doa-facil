// src/pages/ChatPage/ChatPage.jsx

import React, { useState } from 'react';
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter.jsx";
import ConversationsList from './components/ConversationsList';
import ChatWindow from './components/ChatWindow';
import { conversations } from './data'; // Importe os dados das conversas

export const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer className="flex flex-col h-screen">
        <div className="flex flex-1">
          {/* Esquerda: Lista de Conversas */}
          <div className="w-full md:w-1/3 border-r border-gray-300 h-full">
            <ConversationsList
              conversations={conversations}
              onSelectConversation={setSelectedConversation}
            />
          </div>
          {/* Direita: Janela do Chat */}
          <div className="w-full md:w-2/3 h-full">
            {selectedConversation ? (
              <ChatWindow
                conversation={selectedConversation}
                isFullScreen={true}
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
