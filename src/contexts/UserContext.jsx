import { createContext } from 'react';
import PropTypes from 'prop-types';
import * as React from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

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

