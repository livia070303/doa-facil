import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter.jsx'
import { LeftMenuFilters } from './components/LeftMenuFilters.jsx'

export function HomePage(){
    return(
        <>
        <HeaderAndFooter>
           <HeaderAndFooterContainer className="flex"> 
                <LeftMenuFilters/>
                <div className='flex flex-col p-20 gap-8 w-full h-fit-content border border-vermelho-claro'>
                    <div className='bg-neutral-600 w-full py-28 flex items-center justify-center'>
                        <span className='text-4xl font-poppins text-texto-infor'>[ANUNCIO]</span>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' flex flex-col gap-4'>
                        <section className='flex items-center gap-4'>
                            <div className='px-3 py-8 rounded-md bg-vermelho-claro'/>
                            <span className='text-vermelho-escuro font-poppins text-lg'>Recentes</span>
                        </section>
                        <h1 className='text-4xl font-poppins mb-4'>Mais Buscados</h1>
                        </div>
                        <div className='flex-col md:grid md:grid-cols-4'>
                        <div className='bg-vermelho-escuro w-96 h-96'/>
                        <div className='bg-vermelho-escuro w-96 h-96'/>
                        <div className='bg-vermelho-escuro w-96 h-96'/>
                        <div className='bg-vermelho-escuro w-96 h-96'/>
                        </div>
                    </div>
                </div>
           </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}