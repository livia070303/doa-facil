import * as React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import { AuthContext } from '../contexts/AuthContext';
import { ChatContext } from '../contexts/ChatContext';


export function useChat() {

    const queryClient = useQueryClient()

    const { 
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
    } = React.useContext(ChatContext)

    const { user } = React.useContext(AuthContext)
    const queryKey = ['chats', user]

    const handleChatOpen = () => {
        setIsChatOpen(true)
    }
    const handleChatClose = () => {
        setIsChatOpen(false)
    }

    const handleCurrentChat = (chat) => {
        setCurrentChat(chat)
    }

    const handleRemoveCurrentChat = () => {
        setCurrentChat(null)
    }

    const { data, refetch } = useQuery({
      queryKey,
      queryFn: async () => {
        const response = await api.get(`/chat/getLastMessages/${user}`);
        return response.data;
      },
    });

    const sendMessage = useMutation({
        mutationFn: async (data) => {
          const { user1, user2, message } = data
          
          try{
            const response = api.post('/chat/send-message', {
              user1,
              user2,
              message
            })
            return response.data
          }catch(err){
            console.error(err)
            return err.response.data
          }
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey })
        }
      })

    /**
     *
     * @param {user1} sender
     * @param {user2} receiver
     * @param {message} message
     */
    const handleSendMessage = async (user1, user2, message) => {
      sendMessage.mutate(user1, user2, message)

    }


    return { 
      isChatOpen, 
      handleChatOpen,
      handleChatClose, 
      currentChat, 
      handleCurrentChat, 
      handleRemoveCurrentChat, 
      handleSendMessage, 
      setMessages, 
      messages, 
      queryKey,
      refetchState,
      setRefetchState,
      isChatListVisible,
      setIsChatListVisible,
      data,
      refetch
     }
}