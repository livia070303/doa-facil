import PropTypes from 'prop-types';
import { PiCaretRightBold } from 'react-icons/pi';

export function SectionHeader({ label, title, theresViewAll }){
    return(
        <>
        <div className=' flex flex-col gap-4'>
                <section className='flex items-center gap-4'>
                    <div className={`${!label && 'hidden'} px-3 py-8 rounded-md bg-vermelho-claro`}/>
                    
                    {theresViewAll ? (
                        <div className='flex w-full justify-between items-center'>
                            <span className={`text-vermelho-escuro font-poppins text-lg`}>{label}</span>
                            <span className='cursor-pointer font-poppins flex items-center gap-1 text-neutral-500 hover:text-azul-escuro'
                            >Ver Todos
                            <PiCaretRightBold className='text-azul-claro'/></span>
                        </div>
                    ) : (
                        <span className='text-vermelho-escuro font-poppins text-lg'>{label}</span>
                    )
                }
                </section>
            <h1 className='text-4xl font-poppins mb-4'>{title}</h1>
        </div>
        </>
    )
}

SectionHeader.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    theresViewAll: PropTypes.bool,
};