import PropTypes from 'prop-types'; 
import { PiCaretRightBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export function SectionHeader({ label, title, theresViewAll }){
    return(
        <div className='flex flex-col gap-4'>
            <section className='flex items-center gap-4'>
                <div className={`${!label && 'hidden'} px-3 py-8 rounded-md bg-vermelho-claro contrast:bg-custom-yellow`}/>
                
                {theresViewAll ? (
                    <div className='flex w-full justify-between items-center'>
                        <span className='text-vermelho-escuro font-poppins text-lg contrast:text-custom-yellow'>{label}</span>
                        <Link
                            to="/product-selection"
                            className='cursor-pointer font-poppins flex items-center gap-1 text-neutral-500 hover:text-azul-escuro contrast:text-custom-yellow contrast:hover:text-white'
                        >
                            Ver Todos
                            <PiCaretRightBold className='text-azul-claro contrast:text-custom-yellow'/>
                        </Link>
                    </div>
                ) : (
                    <span className='text-vermelho-escuro font-poppins text-lg contrast:text-custom-yellow'>{label}</span>
                )}
            </section>
            <h1 className='text-4xl font-poppins mb-4 contrast:text-custom-yellow'>{title}</h1>
        </div>
    );
}

SectionHeader.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    theresViewAll: PropTypes.bool,
};
