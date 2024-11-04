import * as React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import { AuthContext } from '../contexts/AuthContext';


export function useChat() {

    const queryClient = useQueryClient()
    
    const [isChatOpen, setIsChatOpen] = React.useState(false)
    const [currentChat, setCurrentChat] = React.useState()
    const [messages, setMessages] = React.useState([])
    const { user } = React.useContext(AuthContext)

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
          queryClient.invalidateQueries({ queryKey: ['chats', user] })
        }
      })

    const handleSendMessage = async (user1, user2, message) => {
      sendMessage.mutate(user1, user2, message)
    }
    

    return {  isChatOpen, handleChatOpen, handleChatClose, currentChat, handleCurrentChat, handleRemoveCurrentChat, handleSendMessage, setMessages, messages }
}