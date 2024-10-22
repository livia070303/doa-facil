import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import * as React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
 
 const [isLoading, setIsLoading] = React.useState(true)
 const [isAuthenticated, setIsAuthenticated] = React.useState(false)

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
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['user'] })
    setIsAuthenticated(true)  
    console.log('Login realizado com sucesso!')
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

 
  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, handleRegister, handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }