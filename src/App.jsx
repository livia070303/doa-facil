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
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';

export function App() {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth();

  const shouldRenderChat = () => {
    // Se ainda está carregando o estado de autenticação, não decide ainda
    if (isLoading) {
      return false;
    }

    // Se o usuário não estiver autenticado, não renderiza o chat
    if (!isAuthenticated) {
      return false;
    }

    // Definir os caminhos onde o chat não deve ser renderizado
    const noChatPaths = ['/login', '/register', '/reset-password', '/chat'];

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
      '/product-selection',
    ];

    const isValidPath = validPaths.some((path) => {
      // Tratar rotas com parâmetros, como '/product/:id'
      const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+') + '$');
      return regex.test(location.pathname);
    });

    return isValidPath;
  };

  const PrivateRoute = ({ children }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      <AuthProvider>
        <ScrollToTop />
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
