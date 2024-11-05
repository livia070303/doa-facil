// src/pages/ChatPage/ChatPage.jsx


import  { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ConversationsList from './components/ConversationsList';
import ChatWindow from './components/ChatWindow';
import { useChat } from '../../hooks/useChat';
import { AuthContext } from '../../contexts/AuthContext';


export const ChatPage = () => {
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

  const { data, currentChat: selectedConversation, handleChatClose, handleCurrentChat, handleRemoveCurrentChat, handleSendMessage, setMessages, messages,refetch, refetchState, setRefetchState } = useChat()
  const { user } = useContext(AuthContext)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-200">
      <div className="flex flex-1 h-full">
        {/* Esquerda: Lista de Conversas */}
        {(isMobileView && !selectedConversation) || !isMobileView ? (
          <div className={`w-full md:w-1/3 h-full ${isMobileView ? 'absolute w-full' : ''}`}>
            <ConversationsList
              conversations={data}
              onSelectConversation={handleCurrentChat}
              onMinimizeChat={handleMinimizeChat}
                toggleChat={handleChatClose} 
                user={user}
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
                onBack={handleRemoveCurrentChat}
                isMobileView={isMobileView}  
                currentUserId={user}
                sendMessage={handleSendMessage}
                setMessages={setMessages}
                messages={messages}
                refetch={refetch}
                refetchState={refetchState}
                setRefetchState={setRefetchState}
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
