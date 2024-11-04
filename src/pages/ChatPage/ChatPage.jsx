// src/pages/ChatPage/ChatPage.jsx

// **************************************



// ESSE ARQUIVO É INÚTIL, NAO É CHAMADO EM NENHUM LUGAR.




// **************************************


import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConversationsList from './components/ConversationsList';
import ChatWindow from './components/ChatWindow';
import { conversations } from './data';


export const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Função para detectar se a tela está em modo mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMinimizeChat = () => {
    navigate(-1); // Volta para a página anterior (chat flutuante)
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-200">
      <div className="flex flex-1 h-full">
        {/* Esquerda: Lista de Conversas */}
        {(isMobileView && !selectedConversation) || !isMobileView ? (
          <div className={`w-full md:w-1/3 h-full ${isMobileView ? 'absolute w-full' : ''}`}>
            <ConversationsList
              conversations={conversations}
              onSelectConversation={setSelectedConversation}
              onMinimizeChat={handleMinimizeChat}
            />
          </div>
        ) : null}

        {/* Direita: Janela do Chat */}
        {(isMobileView && selectedConversation) || !isMobileView ? (
          <div className={`w-full md:w-2/3 h-full ${isMobileView ? 'absolute w-full' : ''}`}>
            {selectedConversation ? (
              <ChatWindow
                conversation={selectedConversation}
                isFullScreen={true}
                onMinimizeChat={handleMinimizeChat}
                onBack={() => setSelectedConversation(null)}
                isMobileView={isMobileView}  // Passando a prop para controlar o botão de retorno no mobile
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Selecione uma conversa para começar</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatPage;
