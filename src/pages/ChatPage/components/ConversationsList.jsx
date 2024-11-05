/* eslint-disable react/prop-types */
import Avatar from 'react-avatar';
import { IoClose, IoChevronBackOutline } from "react-icons/io5";

const ConversationsList = ({
  conversations,
  onSelectConversation,
  onMinimizeChat,
  isMinimized,
  toggleChat,
  user,
}) => {

  return (
    <div
      className={`h-full flex flex-col ${
        isMinimized ? '' : 'rounded-lg m-2 border border-gray-300'
      }`}
    >
      {/* Header da Lista de Conversas */}
      <div
        className={`flex justify-between items-center p-4 border-b border-gray-300 bg-white ${
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
      <div className="flex-1 overflow-y-auto bg-white">
        {conversations?.map((conv) => {

          const lastMessage = conv.messages[conv.messages.length - 1]
          const lastMessageSentTime = new Date(lastMessage.Timespam)
          const lastMessageSentTimeFormatted = lastMessageSentTime.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' as ' + lastMessageSentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

          return (
            <div
            key={conv.userIdSecond}
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectConversation(conv)}
          >
            {/* Garantir que o avatar não fique disforme */}
            <div className="flex-shrink-0">
              {conv?.avatar ?
              (
                <Avatar size="40" round={true} src={conv.avatar} />
              ) :
              (
                <Avatar size="40" round={true} name={conv.userIdSecond === user && conv.userFirstDetails.nomeCompleto || conv.userIdFirst === user && conv.userSecondDetails.nomeCompleto} />
              )
              }
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{conv.userIdSecond === user && conv.userFirstDetails.nomeCompleto || conv.userIdFirst === user && conv.userSecondDetails.nomeCompleto}</h4>

                    <p className="text-xs text-gray-500 truncate" key={lastMessage.ConteudoMessage}>
                      {lastMessage.ConteudoMessage}
                    </p>
                  
            </div>
            <div className="text-xs text-gray-500 flex-shrink-0">
              {lastMessageSentTimeFormatted}
            </div>
            
          </div>
          )
        }
        
        )}
      </div>
    </div>
  );
};

export default ConversationsList;
