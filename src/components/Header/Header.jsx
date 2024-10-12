import { FaBars, FaHeart, FaHome, FaPlusCircle, FaInfoCircle, FaQuestionCircle, FaSearch, FaShoppingCart, FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <div className="flex-1 mx-2">
                        <div className="relative">
                            <input
                                placeholder="Pesquise algo..."
                                className="w-full p-2 py-3 rounded-sm"
                            />
                            <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor" />
                        </div>
                    </div>

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
                                    <FaHome className="mr-2 text-white" /> Home
                                </Link>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <Link
                                    to="/faq"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaQuestionCircle className="mr-2 text-white" /> Perguntas Frequentes
                                </Link>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <a className="flex items-center px-4 py-2 text-white">
                                    <FaPlusCircle className="mr-2 text-white"/>Cadastrar Doação
                                </a>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaInfoCircle className="mr-2 text-white" /> Sobre
                                </a>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaUserPlus className="mr-2 text-white" /> Cadastre-se
                                </a>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaHeart className="mr-2 text-white" /> Favoritos
                                </a>
                            </li>
                            <li className="border-t border-azul-escuro hover:bg-azul-médio">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaShoppingCart className="mr-2 text-white" /> Carrinho
                                </a>
                            </li>
                            <li className="border-t border-b border-azul-escuro hover:bg-azul-médio">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FaUser className="mr-2 text-white" /> Área Logada
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

            {/* Header para Telas Médias e Maiores */}
            <div className="hidden md:flex justify-between bg-gradient-to-r from-vermelho-médio to-azul-claro p-2 items-center">
                {/* Conteúdo Original do Header */}
                {/* Logo e Campo de Busca */}
                <div className="flex items-center md:w-full lg:w-[80%] justify-end md:justify-normal md:gap-2 lg:gap-4 xl:gap-12">
                    <img src="./logoRecortado.png" alt="Logo" className="hidden xl:ml-4 lg:ml-2 mt-2 md:flex w-20 h-[5.5rem]" />
                    <div className="relative w-full">
                        <input
                            placeholder="Pesquise algo..."
                            className="min-w-64 md:w-full p-2 py-3 rounded-sm"
                        />
                        <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor" />
                    </div>
                </div>

                {/* Links de Navegação */}
                <div className="hidden md:flex md:w-full gap-4 md:justify-evenly">
                    <Link to="/" className="font-medium font-poppins">
                        Inicial
                    </Link>
                    <Link to="/faq" className="font-medium font-poppins">
                        FAQ
                    </Link>
                    <a href="/#" className="font-medium font-poppins">
                        Sobre
                    </a>
                </div>

                {/* Ícones e Avatar */}
                <div className="hidden mr-5 md:flex justify-between md:w-[20%]">
                    <div className="flex gap-8 items-center flex-row-reverse">
                        <Link to="/create">
                    <div className="relative flex items-center h-fit ">
                                <IoAddCircleOutline className="text-3xl"/>
                            </div>
                        </Link>
                        <div className="relative flex items-center h-fit">
                            <FaRegHeart className="text-2xl" />
                            <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">
                                0
                            </span>
                        </div>
                        <div className="relative flex items-center h-fit">
                            <AiOutlineShoppingCart className="text-2xl" />
                            <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">
                                0
                            </span>
                        </div>
                    </div>

                    <div className="hidden lg:flex md:ml-6 xl:mr-4">
                        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center border-b border-b-rose-950">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
