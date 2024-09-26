import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-vermelho-médio  to-azul-claro text-white">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <div>
                    <img src="./logoRecortado.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Botão do Menu */}
                <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu Dropdown */}
            {menuOpen && (
                <nav className="bg-gradient-to-r from-vermelho-médio to-azul-claro transition-all duration-300 ease-in-out">
                    <ul>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio">

                            <Link to='/' className="flex items-center px-4 py-2"
                                onClick={() => setMenuOpen(false)}>
                                <FaHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio">
                            <a
                                href="#"
                                className="flex items-center px-4 py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaBell className="mr-2" />
                                Notificações
                            </a>
                        </li>
                        <li className="border-t border-azul-escuro hover:bg-azul-médio">
                            <a
                                href="#"
                                className="flex items-center px-4 py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaEnvelope className="mr-2" />
                                Mensagens
                            </a>
                        </li>
                        <li className="border-t border-b border-azul-escuro hover:bg-azul-médio">
                            <a
                                href="#"
                                className="flex items-center px-4 py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaSignOutAlt className="mr-2" />
                                Sair
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

        </header>
    );
};

export default MobileHeader;
