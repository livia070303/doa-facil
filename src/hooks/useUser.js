import * as React from 'react'   
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'


export function useUser(){

    const { user } = React.useContext(AuthContext)

    const { data, isLoading } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
          try {
            const response = await api.get(`/user/${user}`)
            return response.data
          } catch(err){
            console.error(err)
            return err.response.data
          }
        },
      })



    const updateUserMutation = useMutation({
        mutationFn: async (user) => {
          try {
            const response = await api.put(`/user/${user.id}`, user)
            return response.data
          } catch(err){
            console.error(err)
            return err.response.data
          }
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries('userData')
        }})

      const handleUserUpdate = async (user) => {
        await updateUserMutation.mutateAsync(user)
      }

    return { data, isLoading, handleUserUpdate }
}