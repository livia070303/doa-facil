// Sidebar.jsx
import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 bg-gradient-to-b from-azul-claro to-vermelho-médio text-white flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex items-center justify-center h-20">
        <img src="./logoRecortado.png" alt="Logo" className="mt-3 h-20 w-auto" />
      </div>
      {/* Menu */}
      <nav className="mt-10 flex-1">
        <ul>
          <li className="flex items-center px-6 py-2 hover:bg-azul-médio">
            <FaHome />
            <a href="#" className="ml-4">Home</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-azul-médio">
            <FaBell />
            <a href="#" className="ml-4">Notificações</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-azul-médio">
            <FaEnvelope />
            <a href="#" className="ml-4">Mensagens</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-azul-médio">
            <FaSignOutAlt />
            <a href="#" className="ml-4">Sair</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
