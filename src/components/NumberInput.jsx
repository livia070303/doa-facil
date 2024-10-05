import { useState } from 'react';
import PropTypes from 'prop-types';

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
                className="p-2 border border-low-gray rounded-l-md"
            >
                -
            </button>
            <input
                type="number"
                id={id}
                value={value}
                onChange={handleChange}
                className="p-2 w-full text-center border-t border-b border-low-gray"
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="p-2 border border-low-gray rounded-r-md"
            >
                +
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
