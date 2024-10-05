import { useState } from 'react';
import PropTypes from 'prop-types';

function SelectInput({ id, className, options, onChange }) {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSelect = (size) => {
        setSelectedSize(size);
        onChange(size);
    };

    return (
        <div id={id} className={`${className}`}>
            <label className='flex items-center gap-4 font-poppins text-sm font-semibold'>
            Tamanho:
            {options.map((size, index) => (
                <div
                    key={index}
                    onClick={() => handleSelect(size)}
                    className={`cursor-pointer w-8 h-8 text-center items-center flex justify-center border rounded-md ${
                        selectedSize === size ? 'bg-vermelho-médio text-white' : 'hover:bg-vermelho-escuro hover:text-white bg-gray-200'
                    }`}
                >
                    {size}
                </div>
            ))}
            </label>
        </div>
    );
}

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectInput;