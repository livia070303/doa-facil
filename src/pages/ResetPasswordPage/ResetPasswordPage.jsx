import React from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import ResetPasswordForm from '../../components/AuthLayout/ResetPasswordForm';

export const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

