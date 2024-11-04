// src/components/Chat/Chat.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatWindow from '../../pages/ChatPage/components/ChatWindow';
import ConversationsList from '../../pages/ChatPage/components/ConversationsList';
import { BsChatLeftText } from "react-icons/bs";
import { useChat } from '../../hooks/useChat';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { AuthContext } from '../../contexts/AuthContext';

const Chat = () => {

  const { isChatOpen, handleChatClose, handleChatOpen, currentChat, handleCurrentChat, handleRemoveCurrentChat, handleSendMessage, setMessages, messages } = useChat()

  const [isChatListVisible, setIsChatListVisible] = React.useState(true); // Controla se a lista ou o chat está visível
  const navigate = useNavigate();

  const { user } = React.useContext(AuthContext)

  const { data, refetch } = useQuery({
    queryKey: ['chats', user],
    queryFn: async () => {
      const response = await api.get(`/chat/getLastMessages/${user}`);
      return response.data;
    },
  });


  const openFullScreenChat = () => {
    handleChatClose()
    navigate('/chat');
  };

  // Função para selecionar uma conversa
  const handleSelectConversation = (conversation) => {
    handleCurrentChat(conversation);
    setIsChatListVisible(false); // Oculta a lista e mostra o chat
  };

  // Função para voltar à lista de conversas
  const handleBackToList = () => {
    setIsChatListVisible(true);
    handleRemoveCurrentChat();
  };


  return (
    <>
      {/* Botão flutuante para abrir o chat */}
      {!isChatOpen && (
        <div className="fixed bottom-4 rounded-full right-4 z-50">
          <button
            onClick={handleChatOpen}
            className="bg-vermelho-médio text-white p-6 rounded-full shadow-lg hover:bg-azul-claro transform transition-transform duration-300 hover:-translate-y-1"
          >
            <BsChatLeftText className="text-3xl  contrast:text-black" />
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
                conversations={data}
                onSelectConversation={handleSelectConversation}
                isMinimized={true}
                toggleChat={handleChatClose} 
                user={user}
              />
            ) : (
              // Exibir a janela de chat da conversa selecionada
              <ChatWindow
                conversation={currentChat}
                isFullScreen={false}
                toggleChat={handleChatClose}
                onBack={handleBackToList} // Função para voltar à lista
                currentUserId={user}
                sendMessage={handleSendMessage}
                setMessages={setMessages}
                messages={messages}
                refetch={refetch}
              />
            )}
            {/* Link para ver o chat em tela cheia */}
            <div className="text-center mt-2">
              <button
                onClick={openFullScreenChat}
                className="text-white font-bold rounded-md shadow-lg bg-azul-claro hover:bg-azul-médio  p-2 px-6 mb-2 border contrast:bg-custom-yellow contrast:text-custom-black contrast:border-custom-black contrast:hover:bg-white"
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
