import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaHistory, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDonateHeart } from "react-icons/bi";

const Sidebar = () => {
    return (
        <aside className="w-full md:w-64 bg-gradient-to-b from-azul-claro to-vermelho-médio text-white flex flex-col min-h-screen contrast:bg-none contrast:bg-custom-yellow">
            {/* Logo */}
            <div className="flex items-center justify-center h-20">
                <img src="./logoRecortado.png" alt="Logo" className="mt-16 h-32 w-auto" />
            </div>
            {/* Menu */}
            <nav className="mt-10 flex-1">
                <ul>
                    <li>
                        <Link to='/' className="flex items-center px-6 py-4 hover:bg-azul-médio contrast:hover:bg-white">
                            <FaHome className="text-2xl contrast:text-custom-black" />
                            <span className="ml-4 text-lg contrast:font-bold contrast:text-custom-black">Home</span>
                        </Link>
                    </li>
                    {/*<li>
                        <Link to='/history' className="flex items-center px-6 py-4 hover:bg-azul-médio contrast:hover:bg-white">
                            <FaHistory className="text-xl contrast:text-custom-black" />
                            <span className="ml-4 text-lg contrast:font-bold contrast:text-custom-black">Histórico</span>
                        </Link>
                    </li>*/}
                    <li>
                        <Link to='/create' className="flex items-center px-6 py-4 hover:bg-azul-médio contrast:hover:bg-white">
                            <BiSolidDonateHeart className="text-2xl contrast:text-custom-black" />
                            <span className="ml-4 text-lg contrast:font-bold contrast:text-custom-black">Doar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat' className="flex items-center px-6 py-4 hover:bg-azul-médio contrast:hover:bg-white">
                            <FaEnvelope className="text-xl contrast:text-custom-black" />
                            <span className="ml-4 text-lg contrast:font-bold contrast:text-custom-black"> Mensagens</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className="flex items-center px-6 py-4 hover:bg-azul-médio contrast:hover:bg-white">
                            <FaSignOutAlt className="text-xl contrast:text-custom-black" />
                            <span className="ml-4 text-lg contrast:font-bold contrast:text-custom-black">Sair</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
