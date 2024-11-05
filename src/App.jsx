import { useState, useContext, useEffect } from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage'; 
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CreateProductPage } from './pages/CreateProductPage/CreateProductPage';
import { FAQPage } from './pages/FAQPage/FAQPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import CartPage from './pages/CartPage/CartPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import RequirementsListPage from './pages/RequirementsListPage/RequirementsListPage';
import Chat from './components/Chat/Chat';
import ChatPage from './pages/ChatPage/ChatPage';
import ProductSelectionPage from './pages/ProductSelectionPage/ProductSelectionPage';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import { UserProvider } from './contexts/UserContext';
import { ChatProvider } from './contexts/ChatContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

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
  const [highContrast, setHighContrast] = useState(false);

  // Adicionado o useEffect para adicionar/remover a classe 'contrast' no elemento raiz
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('contrast');
    } else {
      document.documentElement.classList.remove('contrast');
    }
  }, [highContrast]);

  const noChatPaths = ['/login', '/register', '/reset-password', '/chat'];

  const shouldRenderChat = () => {
    if (noChatPaths.includes(location.pathname)) {
      return false;
    }

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
      const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+') + '$');
      return regex.test(location.pathname);
    });

    return isValidPath;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className={highContrast ? 'high-contrast' : ''}>
      <AuthProvider>
        <UserProvider>
          <ChatProvider>

          <ScrollToTop />

        {/* Botão para alternar o alto contraste */}
        <button
          onClick={toggleContrast}
          className="fixed bottom-5 left-5 p-2 font-bold bg-yellow-400 text-black border-2 border-black z-50"
        >
          {highContrast ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste'}
        </button>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/user" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/create" element={<CreateProductPage />} />
            {/* <Route path="/create-needed" element={<CreateNeededProductPage />} /> */}
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/requirements-list" element={<RequirementsListPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/product-selection" element={<ProductSelectionPage />} />
          </Routes>

          {shouldRenderChat() && <Chat />}
         </ChatProvider>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}
