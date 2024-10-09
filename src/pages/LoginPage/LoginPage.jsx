import React from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import LoginForm from '../../components/AuthLayout/LoginForm';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
