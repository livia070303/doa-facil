import { Link } from 'react-router-dom'
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter.jsx'
import { Separator } from '../../components/Separator.jsx'
import { LeftMenuFilters } from './components/LeftMenuFilters.jsx'
import { MostSearchedItems } from './components/MostSearchedItems.jsx'
import { SectionHeader } from './components/SectionHeader.jsx'

export function HomePage(){
    return(
        <>
        <HeaderAndFooter>
           <HeaderAndFooterContainer className="flex"> 
                <LeftMenuFilters/>
                <div className='flex flex-col w-full h-fit-content border '>
                     {/* Imagem do Anúncio */}
                     <div className='w-full'>
                            <img
                                src='../public/conectandosolidariedade.jpg'
                                alt='Descrição do anúncio'
                                className='w-full h-auto object-cover'
                            />
                        </div>
                    <div className='flex flex-col p-20 md:p-8 lg:p-20 gap-8'>
                        <SectionHeader label='Recentes' title="Mais buscados" key="recentes"/>
                        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-4'>
                        <Link to="/product/1">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/2">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/3">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/4">
                        <MostSearchedItems/>
                        </Link>
                        </div>
                        <div className='w-full flex items-center justify-center mt-12'>
                            <span className='cursor-pointer p-4 rounded-md bg-vermelho-escuro hover:bg-vermelho-médio transition-colors text-white font-poppins'>Ver Todos Produtos</span>
                        </div>
                        <Separator className="my-8 h-0.5"/>
                        <SectionHeader label="Categorias" title="Busque por Categoria" theresViewAll key="categorias"/>
                        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-4'>
                        <div className='w-[132px] h-[128px] rounded-full border border-low-gray hover:border-azul-claro shadow-md'/>
                        <div className='w-[132px] h-[128px] rounded-full border border-low-gray hover:border-azul-claro shadow-md'/>
                        <div className='w-[132px] h-[128px] rounded-full border border-low-gray hover:border-azul-claro shadow-md'/>
                        <div className='w-[132px] h-[128px] rounded-full border border-low-gray hover:border-azul-claro shadow-md'/>
                        </div>
                    </div>
                </div>
           </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}