import LoginPage from './pages/LoginPage/LoginPage';
import { Navigate, Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import UserProfile from './pages/UserProfile/UserProfile';

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
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/home" element={<PrivateRoute><div>Home</div></PrivateRoute>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/user" element={<UserProfile/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
        </>
    );
}
