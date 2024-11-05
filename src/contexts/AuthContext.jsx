import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import * as React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = React.useState('')
 

 const loginAccount = useMutation({
  mutationFn: async (credentials) => {
    const { email, password } = credentials

    try{
      await api.post('/sessions', {
        email,
        senha: password,
      })
    } catch(err){
      console.error(err)
      return err.response.data
    }
    
  },
  onSuccess: (data) => {
    queryClient.invalidateQueries({ queryKey: ['user'] })
    setUser(data)
    navigate('/')
  }
 })

 const handleLogin = async (data) => {
  loginAccount.mutate(data)
 }

  const createAccount = useMutation({
    mutationFn: async (newAccount) => {
      const { nome, password, phone, cep, cidade, cpf, email, estado, logradouro} = newAccount
      try{
        const response = await api.post('/user', ({
          nomeCompleto: nome,
          CPF: cpf,
          email,
          senha: password,
          telefone: phone,
          estado,
          rua: logradouro,
          cidade,
          CEP: cep,
        }))
        return response.data

      }catch(err){
        console.error(err)
        return err.response.data
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      navigate('/login')
    },
  })

  const handleRegister = async (data) => {
    createAccount.mutate(data)
  };
 
  const logoutAccount = useMutation({
    mutationFn: async () => {
      try{
        await api.get('/logout')
      }catch(err){
        console.error(err)
        return err.response.data
      }
    },
    onSuccess: () => {
      setUser(undefined)
      navigate('/login')
    }
  })

  const handleLogout = () => {
    logoutAccount.mutate()
  }

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try{
        const response = await api.get('/authorization')
        return response.data
      }catch(err){
        console.error(err)
        return err.response.data
      }
    },
  })
 
  React.useEffect(() => {
    if (data && data.sub !== user) {
      setUser(data.sub);
      api.defaults.headers.Authorization = `Bearer ${data.sub}`;
      setIsLoading(false);
    }
  }, [data, user]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, isLoading, handleRegister, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

