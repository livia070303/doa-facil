import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

export function Header(){
    return(
        <>
        <div className="flex justify-between  bg-gradient-to-r from-vermelho-médio  to-azul-claro p-2 items-center">
        <div className="p-2 md:hidden">
        <CiMenuFries className="rotate-180  font-extrabold text-black" fontWeight="bold"/>
        </div>
        <div className='flex items-center md:w-full lg:w-[80%] justify-end md:justify-normal md:gap-2 lg:gap-4 xl:gap-12'>
            <img src="./logoRecortado.png" alt="Logo" className="hidden xl:ml-4 lg:ml-2 mt-2 md:flex w-20 h-[5.5rem]"/>
            <div className="relative w-full">
            <input 
            placeholder='Pesquise algo...'
            className='min-w-64 md:w-full p-2 py-3 rounded-sm'
            />
            <FaSearch className='absolute top-1/2 right-2 transform -translate-y-1/2 text-texto-infor'/>
            </div>
        </div>
        <div className='hidden md:flex md:w-full gap-4 md:justify-evenly'>
            <span className="font-medium font-poppins">Inicial</span>
            <span className="font-medium font-poppins">Contato</span>
            <span className="font-medium font-poppins">Sobre</span>
        </div>
        <div className='hidden mr-5 md:flex justify-between md:w-[20%]'>
            <div className="flex gap-8 items-center">

            <div className="relative flex items-center h-fit">
                <FaRegHeart className='text-2xl'/>
                <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">0</span>
            </div>
            <div className="relative flex items-center h-fit">
                <AiOutlineShoppingCart className='text-2xl'/>
                <span className="absolute -right-3 -top-4 bg-vermelho-escuro text-white text-center w-6 h-6 rounded-full">0</span>
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
    )
}