import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import { HistoryProduct } from "./HistoryProduct";



export function HistoryPage(){
    return(
        <>
        <HeaderAndFooter>
            <HeaderAndFooterContainer className="flex p-6 lg:p-24 flex-col gap-4">
                <div className="border border-low-gray p-2 md:p-0">
                    <h1 className="font-poppins text-2xl p-6">Histórico de produtos</h1>
                    <div className="flex md:flex-col items-center">
                        <header className="hidden md:flex border w-full p-4 bg-low-gray text-low-gray-100">
                            <span className="w-[60%]">PRODUTO</span>
                            <span className="w-[30%]">DISPONIBILIDADE</span>
                            <span className="w-[30%] flex items-end justify-end">AÇÃO</span>
                        </header>
                        <div className="flex flex-col md:hidden w-full bg-low-gray p-1 rounded-tl-md rounded-bl-md">
                            <span className="text-sm text-low-gray-100 ">PRODUTO</span>
                            <span className="text-sm text-low-gray-100 ">DISPONIBILIDADE</span>
                            <span className="text-sm text-low-gray-100 h-12">AÇÃO</span>
                        </div>
                        <HistoryProduct product="Drone" availability="Disponível" actionType="Cancel"/>
                    </div>
                </div>
            </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}