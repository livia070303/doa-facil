// src/pages/ChatPage/components/ConversationsList.jsx

import React from 'react';
import Avatar from 'react-avatar';

const ConversationsList = ({ conversations, onSelectConversation, onMinimizeChat, isMinimized }) => {
  return (
    <div className={`h-full flex flex-col ${isMinimized ? '' : 'rounded-lg m-2 border border-gray-300'}`}>
      {/* Header da Lista de Conversas */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h3 className="text-lg font-semibold">Mensagens</h3>
        {!isMinimized && (
          <button onClick={onMinimizeChat}>
            {/* Ícone de seta para minimizar */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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
              <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
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
