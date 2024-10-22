import { LoginPage } from './pages/LoginPage/LoginPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CreateProductPage } from './pages/CreateProductPage/CreateProductPage';
import { FAQPage } from './pages/FAQPage/FAQPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import { CreateNeededProductPage } from './pages/CreateNeededProductPage/CreateNeededProductPage';
import CartPage from './pages/CartPage/CartPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import RequirementsListPage from './pages/RequirementsListPage/RequirementsListPage';
import Chat from './components/Chat/Chat';
import ChatPage from './pages/ChatPage/ChatPage';
import ProductSelectionPage from './pages/ProductSelectionPage/ProductSelectionPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export function App() {
  const location = useLocation();

  // Definir os caminhos onde o chat não deve ser renderizado
  const noChatPaths = ['/login', '/register', '/reset-password', '/chat'];

  // Função para verificar se o caminho atual corresponde a uma rota específica ou a rota de erro
  const shouldRenderChat = () => {
    // Se o caminho atual está em `noChatPaths`, não renderiza o chat
    if (noChatPaths.includes(location.pathname)) {
      return false;
    }

    // Se nenhuma rota válida correspondeu, estamos na página de erro
    const validPaths = [
      '/',
      '/user',
      '/history',
      '/create',
      '/create-needed',
      '/product/:id',
      '/faq',
      '/cart',
      '/checkout',
      '/requirements-list',
    ];

    const isValidPath = validPaths.some((path) => {
      // Tratar rotas com parâmetros, como '/product/:id'
      const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+') + '$');
      return regex.test(location.pathname);
    });

    return isValidPath;
  };


  return (
    <>
      <AuthProvider>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/user" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/create" element={<CreateProductPage />} />
            <Route path="/create-needed" element={<CreateNeededProductPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/requirements-list" element={<RequirementsListPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/product-selection" element={<ProductSelectionPage />} />
          </Routes>

        {/* Renderiza o Chat se `shouldRenderChat` retornar true */}
        {shouldRenderChat() && <Chat />}
        
      </AuthProvider>
    </>
  );
}
