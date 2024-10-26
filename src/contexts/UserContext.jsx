import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const location = useLocation()
  const [userData, setUserData] = React.useState('')
  

  return (
    <UserContext.Provider value={{  userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

