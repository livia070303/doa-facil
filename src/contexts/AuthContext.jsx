import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const location = useLocation()
 const [isLoading, setIsLoading] = React.useState(false)
 const [isAuthenticated, setIsAuthenticated] = React.useState('true')
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
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['user'] })
    setIsAuthenticated(true)  
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

  const fetchAuthorization = useMutation({
    mutationFn: async () => {
      try{
        const response = await api.get('/authorization')
        console.log(response)
        if(response.status === 200){
          setIsAuthenticated(response.data.token)
          setUser(response.data.sub)
        }
      }catch(err){
        console.error(err)
        return err.response.data
      }
    }
  })

  function handleAuthorization(){
    fetchAuthorization.mutate()
  }
  
  React.useEffect(() => {

    if(!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/register'){
      handleAuthorization()
    }

    if(isAuthenticated){
      api.defaults.headers.Authorization = `Bearer ${isAuthenticated}`
    }
  }, [])

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
      queryClient.invalidateQueries({ queryKey: ['user'] })
      setIsAuthenticated('')
      setUser('')
      navigate('/login')
    }
  })

  const handleLogout = () => {
    logoutAccount.mutate()
  }
 
  return (
    <AuthContext.Provider value={{ isAuthenticated: !!isAuthenticated, isLoading, handleRegister, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }