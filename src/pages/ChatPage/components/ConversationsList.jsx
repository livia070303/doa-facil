import React from 'react';
import Avatar from 'react-avatar';
import { IoClose, IoChevronBackOutline } from "react-icons/io5";

const ConversationsList = ({
  conversations,
  onSelectConversation,
  onMinimizeChat,
  isMinimized,
  toggleChat,
}) => {
  return (
    <div
      className={`h-full flex flex-col ${
        isMinimized ? '' : 'rounded-lg m-2 border border-gray-300'
      }`}
    >
      {/* Header da Lista de Conversas */}
      <div
        className={`flex justify-between items-center p-4 border-b border-gray-300 ${
          isMinimized ? 'bg-gradient-to-r from-vermelho-médio to-azul-claro' : ''
        }`}
      >
        <div className="flex items-center space-x-4">
          <h3
            className={`text-lg font-semibold ${
              isMinimized ? 'text-white' : ''
            }`}
          >
            Mensagens
          </h3>
        </div>
        {isMinimized && (
          <button
            onClick={toggleChat}
            className="text-white hover:text-azul-escuro text-xl"
          >
            <IoClose className="text-2xl" />
          </button>
        )}
        {!isMinimized && (
          <button onClick={onMinimizeChat}>
            {/* Ícone de seta para voltar */}
            <IoChevronBackOutline className='text-2xl text-azul-escuro hover:text-azul-médio' />
          </button>
        )}
      </div>
      {/* Lista de Conversas */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectConversation(conv)}
          >
            <Avatar size="40" round={true} src={conv.avatar} />
            <div className="ml-4 flex-1">
              <h4 className="text-sm font-medium">{conv.name}</h4>
              <p className="text-xs text-gray-500 truncate">
                {conv.lastMessage}
              </p>
            </div>
            <div className="text-xs text-gray-500">{conv.time}</div>
            {conv.unread && (
              <div className="ml-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {conv.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
