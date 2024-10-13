// src/pages/ChatPage/components/ConversationsList.jsx

import React from 'react';
import Avatar from 'react-avatar';

const ConversationsList = ({ conversations, onSelectConversation }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header da Lista de Conversas */}
      <div className="bg-blue-500 text-white p-4">
        <h3 className="text-lg font-semibold">Conversas</h3>
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
