// src/components/Header/Header.jsx

import { FaBars, FaHeart, FaHome, FaPlusCircle, FaQuestionCircle, FaSearch, FaShoppingCart, FaTimes, FaUser, FaUserPlus, FaGift } from "react-icons/fa";  
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AvatarDropDown } from "./Avatar-dropdown";
import { AuthContext } from "../../contexts/AuthContext";
import { HashLink } from "react-router-hash-link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* Header para Telas Pequenas */}
      <div className="md:hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-vermelho-médio to-azul-claro contrast:bg-none contrast:!bg-black p-2">
          {/* Logo */}
          <div className="p-2">
            <img src="./logoRecortado.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Barra de Pesquisa */}
          {isAuthenticated && (
            <div className="flex-1 mx-2">
              <div className="relative">
                <input
                  placeholder="Pesquise algo..."
                  className="w-full p-2 py-3 rounded-sm"
                />
                <FaSearch
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}

          {/* Botão do Menu */}
          <div className="p-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              {menuOpen ? (
                <FaTimes className="text-2xl text-white" aria-hidden="true" />
              ) : (
                <FaBars className="text-2xl text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Dropdown */}
        {menuOpen && (
          <nav
            className="bg-gradient-to-r from-vermelho-médio to-azul-claro"
            aria-label="Menu móvel"
          >
            <ul>
              <li className="border-t border-azul-escuro hover:bg-azul-médio">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHome className="mr-2 text-white" aria-hidden="true" />
                  <span>Inicial</span>
                </Link>
              </li>
              <li className="border-t border-azul-escuro hover:bg-azul-médio">
                <Link
                  to="/faq"
                  className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaQuestionCircle className="mr-2 text-white" aria-hidden="true" />
                  <span>FAQ</span>
                </Link>
              </li>
              {!isAuthenticated ? (
                // Menu para usuários não logados
                <>
                  <li className="border-t border-azul-escuro hover:bg-azul-médio">
                    <Link
                      to="/register"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaUserPlus className="mr-2 text-white" aria-hidden="true" />
                      <span>Cadastre-se</span>
                    </Link>
                  </li>
                  <li className="border-t border-azul-escuro border-b hover:bg-azul-médio">
                    <Link
                      to="/login"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaUser className="mr-2 text-white" aria-hidden="true" />
                      <span>Login</span>
                    </Link>
                  </li>
                </>
              ) : (
                // Menu para usuários logados
                <>
                  <li className="border-t border-azul-escuro hover:bg-azul-médio">
                    <Link
                      to="/create"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaPlusCircle className="mr-2 text-white" aria-hidden="true" />
                      <span>Doar</span>
                    </Link>
                  </li>
                  <li className="border-t border-azul-escuro hover:bg-azul-médio">
                    <Link
                      to="/receive"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaGift className="mr-2 text-white" aria-hidden="true" />
                      <span>Receber</span>
                    </Link>
                  </li>
                  <li className="border-t border-azul-escuro hover:bg-azul-médio">
                    <HashLink
                      smooth
                      to="/user#favoritos"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaHeart className="mr-2 text-white" aria-hidden="true" />
                      <span>Favoritos</span>
                    </HashLink>
                  </li>
                  <li className="border-t border-azul-escuro hover:bg-azul-médio">
                    <Link
                      to="/cart"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaShoppingCart className="mr-2 text-white" aria-hidden="true" />
                      <span>Carrinho</span>
                    </Link>
                  </li>
                  <li className="border-t border-azul-escuro border-b hover:bg-azul-médio">
                    <Link
                      to="/user"
                      className="flex items-center px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaUser className="mr-2 text-white" aria-hidden="true" />
                      <span>Perfil</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>

      {/* Header para Telas Médias e Maiores */}
      <div className="hidden md:flex justify-between bg-gradient-to-r from-vermelho-médio to-azul-claro contrast:bg-none contrast:bg-custom-black p-0 items-center">
        {/* Logo e Campo de Busca */}
        <div className="flex items-center md:w-full lg:w-[80%] justify-end md:justify-normal md:gap-2 lg:gap-4 xl:gap-12">
          <img
            src="./logoRecortado.png"
            alt="Logo"
            className="hidden xl:ml-4 lg:ml-2 mt-2 md:flex w-20 h-[5.5rem]"
          />

          {isAuthenticated && (
            <div className="relative w-full">
              <input
                placeholder="Pesquise algo..."
                className="min-w-64 md:w-full p-2 py-3 rounded-sm"
              />
              <FaSearch
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor contrast:text-custom-black"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* Links de Navegação */}
        <nav
          className="hidden md:flex md:w-full gap-4 md:justify-evenly"
          aria-label="Menu principal"
        >
          <Link
            to="/"
            className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
          >
            Inicial
          </Link>
          <Link
            to="/faq"
            className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
          >
            FAQ
          </Link>

          {!isAuthenticated ? (
            // Links para usuários não logados
            <>
              <Link
                to="/register"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
              >
                Cadastre-se
              </Link>
              <Link
                to="/login"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
              >
                Login
              </Link>
            </>
          ) : (
            // Links para usuários logados
            <>
              <Link
                to="/create"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
              >
                Doar
              </Link>
              <Link
                to="/create-needed"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white p-2 contrast:text-custom-yellow contrast:hover:text-white"
              >
                Receber
              </Link>
            </>
          )}
        </nav>

        {/* Ícones e Avatar */}
        {isAuthenticated && (
          <div className="hidden mr-5 md:flex justify-between md:w-[20%] items-center">
            <div className="flex gap-8 items-center flex-row-reverse">
              {/* Ícone de Favoritos */}
              <HashLink
                smooth
                to="/user#favoritos"
                className="relative flex items-center h-fit transition-all duration-200 ease-in-out transform hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Favoritos"
              >
                <FaRegHeart className="text-2xl" aria-hidden="true" />
                <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">
                  0
                </span>
              </HashLink>

              {/* Ícone de Carrinho */}
              <Link
                to="/cart"
                className="relative flex items-center h-fit transition-all duration-200 ease-in-out transform hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Carrinho"
              >
                <AiOutlineShoppingCart className="text-2xl" aria-hidden="true" />
                <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">
                  0
                </span>
              </Link>
            </div>

            {/* Avatar do Usuário */}
            <AvatarDropDown />
          </div>
        )}
      </div>
    </>
  );
}
