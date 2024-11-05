import { createContext } from 'react';
import PropTypes from 'prop-types';
import * as React from 'react'

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const [isChatOpen, setIsChatOpen] = React.useState(false)
    const [currentChat, setCurrentChat] = React.useState()
    const [messages, setMessages] = React.useState([])
    const [refetchState, setRefetchState] = React.useState(false);
    const [isChatListVisible, setIsChatListVisible] = React.useState(true);
  
  return (
    <ChatContext.Provider 
    value={{  
        isChatOpen,
        setIsChatOpen,
        currentChat,
        setCurrentChat,
        messages,
        setMessages,
        refetchState,
        setRefetchState,
        isChatListVisible,
        setIsChatListVisible
      }}>
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

