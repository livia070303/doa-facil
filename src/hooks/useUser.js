import * as React from 'react'   
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'


export function useUser(){

    const { user } = React.useContext(AuthContext)
   
    const regionOptions = [ {
        value: 'AC',
        label: 'Acre'
    }, {
        value: 'AL',
        label: 'Alagoas'
    }, {
        value: 'AP',
        label: 'Amapá'
    }, {
        value: 'AM',
        label: 'Amazonas'
    }, {
        value: 'BA',
        label: 'Bahia'
    }, {
        value: 'CE',
        label: 'Ceará'
    }, {
        value: 'DF',
        label: 'Distrito Federal'
    }, {
        value: 'ES',
        label: 'Espírito Santo'
    }, {
        value: 'GO',
        label: 'Goiás'
    }, {
        value: 'MA',
        label: 'Maranhão'
    }, {
        value: 'MT',
        label: 'Mato Grosso'
    }, {
        value: 'MS',
        label: 'Mato Grosso do Sul'
    }, {
        value: 'MG',
        label: 'Minas Gerais'
    }, {
        value: 'PA',
        label: 'Pará'
    }, {
        value: 'PB',
        label: 'Paraíba'
    }, {
        value: 'PR',
        label: 'Paraná'
    }, {
        value: 'PE',
        label: 'Pernambuco'
    }, {
        value: 'PI',
        label: 'Piuaí'
    }, {
        value: 'RJ',
        label: 'Rio de Janeiro'
    }, {
        value: 'RN',
        label: 'Rio Grande do Norte'
    }, {
        value: 'RS',
        label: 'Rio Grande do Sul'
    }, {
        value: 'RO',
        label: 'Rondônia'
    }, {
        value: 'RR',
        label: 'Roraima'
    }, {
        value: 'SC',
        label: 'Santa Catarina'
    }, {
        value: 'SP',
        label: 'São Paulo'
    }, {
        value: 'SE',
        label: 'Sergipe'
    }, {
        value: 'TO',
        label: 'Tocantins'
    }]

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

    return { regionOptions, data, isLoading, handleUserUpdate }
}