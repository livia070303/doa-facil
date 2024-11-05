/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { IoClose, IoChevronBackOutline, IoSend } from "react-icons/io5";

const ChatWindow = ({ 
  conversation, 
  isFullScreen, 
  toggleChat, 
  onBack, 
  isMobileView, 
  currentUserId, 
  sendMessage, 
  setMessages, 
  messages, 
  refetch,
 }) => {

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (conversation && conversation?.messages) {
      setMessages && setMessages(conversation.messages);
    
    } 
    else {
      setMessages([]);
    }
  }, [conversation, setMessages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const data = {
      user1: currentUserId,
      user2: conversation.userIdSecond,
      message: newMessage,
    }

  setMessages((prevMessages) => [
    ...prevMessages,
    {
      userSend: currentUserId, 
      ConteudoMessage: newMessage,
      Timespam: new Date().toISOString(), 
    },
  ]);
    await sendMessage(data);
    await refetch()

    setNewMessage('');
  };

  return (
    <div key={conversation?.userIdSecond} className={`bg-white ${isFullScreen ? 'h-full m-2 rounded-lg' : 'flex-1'} overflow-hidden flex flex-col`}>
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-vermelho-médio to-azul-claro flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          {/* Mostra o botão de voltar apenas no mobile e quando em tela cheia */}
          {(!isFullScreen || (isMobileView && isFullScreen)) && (
            <button onClick={onBack} className="text-white hover:text-azul-escuro">
              {/* Ícone de seta para voltar */}
              <IoChevronBackOutline className="text-2xl" />
            </button>
          )}
          
          {
          conversation.avatar ?
          (

            <Avatar
            size="40"
            round={true}
            src={conversation.avatar}
            />
          ) : (
            <Avatar
            size='40'
            round={true}
            name={conversation && conversation?.userIdSecond === currentUserId && conversation?.userFirstDetails?.nomeCompleto || conversation && conversation?.userIdFirst === currentUserId && conversation?.userSecondDetails?.nomeCompleto}
            />
          )
          }

          <h3 className="text-white text-lg font-semibold">
            {conversation && conversation?.userIdSecond === currentUserId && conversation?.userFirstDetails?.nomeCompleto}
            {conversation && conversation?.userIdFirst === currentUserId && conversation?.userSecondDetails?.nomeCompleto}
          </h3>
        </div>
        {!isFullScreen && (
          <button onClick={toggleChat} className="text-white hover:text-azul-escuro text-xl">
           <IoClose className='text-2xl'/>
          </button>
        )}
      </div>

      {/* Chat Body */}
      <div className="p-4 flex-1 overflow-y-auto">
        {messages?.length > 0 ? (
          messages.map((msg) => {
            const isSentByCurrentUser = msg?.userSend === currentUserId;

            const messageSentTime = new Date(msg?.Timespam)
            const messageSentTimeFormatted = messageSentTime?.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' às ' + messageSentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


            return (
              <div key={msg.id} className={`mb-4 flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${isSentByCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <p className="text-sm">{msg?.ConteudoMessage}</p>
                  <div className="text-xs mt-1 text-right text-slate-300 opacity-80">{messageSentTimeFormatted}</div>
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
            className="ml-3 bg-azul-claro text-white p-3 rounded-full hover:bg-azul-médio transition-all duration-300"
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
