import {  BsFillHouseDoorFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <>
        <div className="flex flex-col items-center  w-screen h-screen">
        <img src="./error404.svg" alt="Error" className="w-[500px] h-[500px]"/>
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center">
            <span className="font-poppins text-3xl font-semibold">404</span>
            <span className="font-poppins text-2xl text-texto-infor">Página não encontrada</span>
            </div>

            <div>
                <span className="flex flex-col items-center text-center font-semibold">Ops! Algo deu errado.<p className="font-thin">Parece que sua solicitação não foi encontrada. Parece que o link está quebrado ou a página foi removida.</p></span>
            </div>
            <Link to="/">
            <button className="bg-orange text-white flex items-center justify-center px-4 gap-2 py-2 rounded-sm"><BsFillHouseDoorFill/> IR PARA PÁGINA INICIAL</button>
            </Link>
        </div>
        </div>
        </>
    )
}