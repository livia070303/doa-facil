import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiMinus, BiPlus } from 'react-icons/bi';

function NumberInput({ id, className, min = 0, max = 100, step = 1 }) {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        if (value < max) {
            setValue(prevValue => prevValue + step);
        }
    };

    const handleDecrement = () => {
        if (value > min) {
            setValue(prevValue => prevValue - step);
        }
    };

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (newValue >= min && newValue <= max) {
            setValue(newValue);
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            <button
                type="button"
                onClick={handleDecrement}
                className="p-3 border border-low-gray rounded-l-md"
            >
                <BiMinus className='text-1xl'/>
            </button>
            <input
                type="text"
                id={id}
                value={value}
                onChange={handleChange}
                className="p-2 w-1/5 text-center border-t border-b border-low-gray"
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="p-2 border border-low-gray bg-azul-claro flex items-center juistify-center rounded-r-md"
            >
                <BiPlus className='text-2xl text-white'/>
            </button>
        </div>
    );
}
NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
};

export default NumberInput;
