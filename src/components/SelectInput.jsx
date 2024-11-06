import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SelectInput({ id, className, options, onChange, value }) {
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        setSelectedSize(value)
  }, [value]);

    const handleSelect = (size) => {
        setSelectedSize(size);
        onChange(size);
    };

    return (
        <div id={id} className={`${className}`}>
            <label className='flex flex-col md:flex-row items-center gap-4 font-poppins text-sm font-semibold'>
            <span>Tamanho:</span>
            <div className='grid grid-cols-2 gap-2 w-full  md:flex'>
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
            </div>
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