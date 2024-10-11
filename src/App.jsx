import { LoginPage } from './pages/LoginPage/LoginPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage'
import { Navigate, Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CreateProductPage } from './pages/CreateProductPage/CreateProductPage';
import { FAQPage } from './pages/FAQPage/FAQPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';
import { NeededProductsPage } from './pages/NeededProductsPage/NeededProductsPage';

const PrivateRoute = (children) => {
    
    const { isAuthenticated, loading } = useAuth()

    if(loading){
        return(
            <>
            <div>Loading...</div>
            </>
        )
    }
    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }

    return children
}

export function App() {

    // Padrão de criação de rota: <Route path="/ROTA" element={<COMPONENTEDAPAGINA/>}></Route>
    // Padrão de criação de rota protegida: <Route path="/ROTA" element={<PrivateRoute><COMPONENTEDAPAGINA/></PrivateRoute>}></Route>
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/needed" element={<NeededProductsPage/>}/>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>
            <Route path="/reset-password" element={<ResetPasswordPage/>} />
            <Route path="/user" element={<PrivateRoute><UserProfile/></PrivateRoute>}></Route>
            <Route path="/history" element={<HistoryPage/>}></Route>
            <Route path="/create" element={<CreateProductPage/>}></Route>
            <Route path="product/:id" element={<ProductPage/>}></Route>
            <Route path="/faq" element={<FAQPage/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
        </>
    );
}
