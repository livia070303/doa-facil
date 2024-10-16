import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuthenticated = true;
  const loading = true;

  const queryClient = useQueryClient()

  const createAccount = useMutation({ 
    mutateFn: (newAccount) => api.post('/users', newAccount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      alert('Conta criada com sucesso!')
    },
  })

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }