import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaHistory, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="w-full md:w-64 bg-gradient-to-b from-azul-claro to-vermelho-médio text-white flex flex-col min-h-screen">
            {/* Logo */}
            <div className="flex items-center justify-center h-20">
                <img src="./logoRecortado.png" alt="Logo" className="mt-16 h-32 w-auto" />
            </div>
            {/* Menu */}
            <nav className="mt-10 flex-1">
                <ul>
                    <li>
                        <Link to='/' className="flex items-center px-6 py-4 hover:bg-azul-médio">
                            <FaHome className="text-xl" />
                            <span className="ml-4 text-lg">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat' className="flex items-center px-6 py-4 hover:bg-azul-médio">
                            <FaEnvelope className="text-xl" />
                            <span className="ml-4 text-lg">Mensagens</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className="flex items-center px-6 py-4 hover:bg-azul-médio">
                            <FaSignOutAlt className="text-xl" />
                            <span className="ml-4 text-lg">Sair</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
