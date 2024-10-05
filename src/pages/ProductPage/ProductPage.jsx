import { CiHeart } from "react-icons/ci";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import { useState } from "react";
import { HiHeart } from "react-icons/hi2";

export function ProductPage(){

    const [favorite, setFavorite] = useState(false)

    return(
        <>
        <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4">
            <h1 className="font-poppins text-3xl">Cadeira vitalis Charles Eames Eiffel Wood Design Trato</h1>
            <div className="flex gap-12 flex-col lg:flex-row">
                <div className="flex flex-col gap-2">
                    <div className="border border-low-gray p-8"/>
                    <div className="border border-low-gray p-8"/>
                    <div className="border border-low-gray p-8"/>
                    <div className="border border-low-gray p-8"/>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="bg-neutral-600 w-full lg:w-96 h-96"/>
                    <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex flex-col">
                        <section className="flex flex-col  justify-end items-end lg:justify-between mb-4 w-60 lg:w-96">
                            <div className="flex items-start flex-col  w-full">
                            <h2 className="font-poppins font-bold">CADEIRA DE MADEIRA</h2>
                            <p className="text-azul-claro underline text-xs">Saber mais</p>
                            </div>
                            {
                                !favorite ? 
                                (

                            <button onClick={() => {
                                setFavorite(true)
                            }}>
                            <CiHeart className="text-vermelho-escuro" size="48"/>
                            </button>
                            )
                            : (
                                <button onClick={() => {
                                    setFavorite(false)
                                }}>
                             <HiHeart className="text-vermelho-escuro" size="48"/> 
                                </button>
                            )
                            }
                        </section>
                        <div>
                            <span className="font-poppins text-2xl">Estado:</span>
                            <p>Novo</p>
                        </div>
                    </div>
                    <div className="w-full bg-azul-médio hover:bg-azul-claro text-white flex items-center justify-center py-3 rounded-md">
                        <span className="text-center">Eu quero!</span>
                    </div>

                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-azul-médio border-b border-azul-separator pb-4 mt-12">Informações</h1>
                <span className="text-texto-infor font-poppins text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essenti  ally unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span>
            </div>

            <div className="w-full mt-12">
                <h1 className="text-texto-label font-poppins text-base mb-6">Itens relacionados</h1>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-texto-label w-full h-96"/>
                    <div className="bg-texto-label w-full h-96"/>
                    <div className="bg-texto-label w-full h-96"/>
                    <div className="bg-texto-label w-full h-96"/>
                </div>
            </div>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}