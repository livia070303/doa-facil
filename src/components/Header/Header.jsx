import { FaBars, FaHeart, FaHome, FaPlusCircle, FaInfoCircle, FaQuestionCircle, FaSearch, FaShoppingCart, FaTimes, FaUser, FaUserPlus, FaGift } from "react-icons/fa"; 
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AvatarDropDown } from "./Avatar-dropdown";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            {/* Header para Telas Pequenas */}
            <div className="md:hidden">
                <div className="flex items-center justify-between bg-gradient-to-r from-vermelho-médio to-azul-claro p-2">
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
                                <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor" />
                            </div>
                        </div>
                    )}

                    {/* Botão do Menu */}
                    <div className="p-2">
                        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
                            {menuOpen ? <FaTimes className="text-2xl text-white" /> : <FaBars className="text-2xl text-white" />}
                        </button>
                    </div>
                </div>

                {/* Menu Dropdown */}
                {menuOpen && (
                    <nav className="bg-gradient-to-r from-vermelho-médio to-azul-claro">
                        <ul>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <Link
                                    to="/"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaHome className="mr-2 text-white" /> Inicial
                                </Link>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <Link
                                    to="/faq"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaQuestionCircle className="mr-2 text-white" /> FAQ
                                </Link>
                            </li>
                            {!isAuthenticated ? (
                                // Menu para usuários não logados
                                <>
                                    <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                        <Link
                                            to="/register"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaUserPlus className="mr-2 text-white" /> Cadastre-se
                                        </Link>
                                    </li>
                                    <li className="border-t border-azul-escuro border-b hover:bg-azul-médio">
                                        <Link
                                            to="/login"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaUser className="mr-2 text-white" /> Login
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                // Menu para usuários logados
                                <>
                                    <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                        <Link
                                            to="/create"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaPlusCircle className="mr-2 text-white" /> Doar
                                        </Link>
                                    </li>
                                    <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                        <Link
                                            to="/receive"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaGift className="mr-2 text-white" /> Receber
                                        </Link>
                                    </li>
                                    <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                        <HashLink 
                                        smooth to="/user#favoritos"                         
                                        className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaHeart className="mr-2 text-white" /> Favoritos
                                        </HashLink>
                                    </li>
                                    <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                        <Link
                                            to="/cart"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaShoppingCart className="mr-2 text-white" /> Carrinho
                                        </Link>
                                    </li>
                                    <li className="border-t border-azul-escuro border-b hover:bg-azul-médio">
                                        <Link
                                            to="/user"
                                            className="flex items-center px-4 py-2 text-white"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <FaUser className="mr-2 text-white" /> Perfil
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                )}
            </div>

            {/* Header para Telas Médias e Maiores */}
            <div className="hidden md:flex justify-between bg-gradient-to-r from-vermelho-médio to-azul-claro p-0 items-center">
                {/* Logo e Campo de Busca */}
                <div className="flex items-center md:w-full lg:w-[80%] justify-end md:justify-normal md:gap-2 lg:gap-4 xl:gap-12">
                    <img src="./logoRecortado.png" alt="Logo" className="hidden xl:ml-4 lg:ml-2 mt-2 md:flex w-20 h-[5.5rem]" />

                    {isAuthenticated && (
                        <div className="relative w-full">
                            <input
                                placeholder="Pesquise algo..."
                                className="min-w-64 md:w-full p-2 py-3 rounded-sm"
                            />
                            <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor" />
                        </div>
                    )}
                </div>

                {/* Links de Navegação */}
        <div className="hidden md:flex md:w-full gap-4 md:justify-evenly">
          <Link
            to="/"
            className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
          >
            Inicial
          </Link>
          <Link
            to="/faq"
            className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
          >
            FAQ
          </Link>

          {!isAuthenticated ? (
            // Links para usuários não logados
            <>
              <Link
                to="/register"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
              >
                Cadastre-se
              </Link>
              <Link
                to="/login"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
              >
                Login
              </Link>
            </>
          ) : (
            // Links para usuários logados
            <>
              <Link
                to="/create"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
              >
                Doar
              </Link>
              <Link
                to="/create-needed"
                className="font-medium font-poppins border-b-2 border-transparent hover:border-azul-claro transition-all duration-200 ease-in-out transform hover:text-white hover:scale-105"
              >
                Receber
              </Link>
            </>
          )}
        </div>

        {/* Ícones e Avatar */}
        {isAuthenticated && (
          <div className="hidden mr-5 md:flex justify-between md:w-[20%]">
            <div className="flex gap-8 items-center flex-row-reverse">
              {/* Ícone de Favoritos */}
              <HashLink 
              smooth to="/user#favoritos" 
              className="relative flex items-center h-fit transition-all duration-200 ease-in-out transform hover:text-white hover:scale-110"
              >
                <FaRegHeart className="text-2xl" />
                <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">
                  0
                </span>
              </HashLink>

              {/* Ícone de Carrinho */}
              <Link
                to="/cart"
                className="relative flex items-center h-fit transition-all duration-200 ease-in-out transform hover:text-white hover:scale-110"
              >
                <AiOutlineShoppingCart className="text-2xl" />
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