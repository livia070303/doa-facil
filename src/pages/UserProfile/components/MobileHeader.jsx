import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaHistory, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDonateHeart } from "react-icons/bi";

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-vermelho-médio  to-azul-claro text-white contrast:bg-none contrast:bg-custom-black">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <div>
                    <img src="./logoRecortado.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Botão do Menu */}
                <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
                    {menuOpen ? (
                    <FaTimes className="text-2xl text-white contrast:text-custom-yellow" aria-hidden="true" />
                     ) : (
                    <FaBars className="text-2xl text-white contrast:text-custom-yellow" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Menu Dropdown */}
            {menuOpen && (
                <nav className="bg-gradient-to-r from-vermelho-médio to-azul-claro transition-all duration-300 ease-in-out contrast:bg-none contrast:bg-custom-black">
                    <ul>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio contrast:border-white">
                            <Link
                            to="/"
                            className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white contrast:text-custom-yellow"
                            onClick={() => setMenuOpen(false)}
                            >
                            <FaHome className="mr-2 text-white" aria-hidden="true" />
                            <span>Inicial</span>
                            </Link>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio contrast:border-white">
                            <Link 
                            to='/history' 
                            className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white contrast:text-custom-yellow"
                            onClick={() => setMenuOpen(false)}
                            >
                            <FaHistory className="mr-2 text-white" aria-hidden="true" />
                            <span>Histórico</span>
                        </Link>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio contrast:border-white">
                            <Link 
                            to='/create' 
                            className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white contrast:text-custom-yellow"
                            >
                            <BiSolidDonateHeart  className="mr-2 text-white text-2xl" aria-hidden="true" />
                            <span>Doar</span>
                        </Link>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio contrast:border-white">
                            <Link 
                            to='/chat' 
                            className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white contrast:text-custom-yellow"
                            >
                            <FaEnvelope className="mr-2 text-white" aria-hidden="true"/>
                            <span> Mensagens</span>
                        </Link>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio contrast:border-white">
                            <Link 
                                to='/login' 
                                className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white contrast:text-custom-yellow"
                                >
                                <FaSignOutAlt className="mr-2 text-white" aria-hidden="true" />
                                <span>Sair</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

        </header>
    );
};

export default MobileHeader;
