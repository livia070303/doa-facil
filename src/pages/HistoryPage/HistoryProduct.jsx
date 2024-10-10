
import PropTypes from 'prop-types';

export function HistoryProduct({ actionType, product, availability }) {
    return(
        <>
        <div className="bg-gray w-full flex flex-col md:flex-row p-4">
        <span className=" md:w-[60%]">{product}</span>
        <span className={` md:w-[30%] ${availability === 'Disponível' && 'text-green font-poppins'} `}>{availability}</span>
        <div className=' md:w-[30%] flex md:items-end md:justify-end'>
        <button className={`px-4 flex items-center justify-center h-12 md:h-8 ${actionType === 'Cancel' && 'rounded-md bg-vermelho-médio text-white'}`}>{actionType === 'Cancel' && 'Cancelar Doação'}</button>
        </div>
        </div>
        </>
    )
}

HistoryProduct.propTypes = {
    actionType: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
};