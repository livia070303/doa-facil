import { LoginPage } from './pages/LoginPage/LoginPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CreateProductPage } from './pages/CreateProductPage/CreateProductPage';
import { FAQPage } from './pages/FAQPage/FAQPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import { NeededProductsPage } from './pages/NeededProductsPage/NeededProductsPage';
import CartPage from './pages/CartPage/CartPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import RequirementsListPage from './pages/RequirementsListPage/RequirementsListPage';
import Chat from './components/Chat/Chat';
import ChatPage from './pages/ChatPage/ChatPage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/needed" element={<NeededProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/user" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/create" element={<CreateProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/requirements-list" element={<RequirementsListPage />} />
        <Route path="/messenger" element={<ChatPage />} />
      </Routes>

      {/* O Chat é renderizado em todas as páginas */}
      <Chat />
    </>
  );
}
