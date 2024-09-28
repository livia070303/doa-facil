import { PiCaretRight } from "react-icons/pi";
import PropTypes from 'prop-types';

export function LeftMenuItem({itemName}){
    return(
        <>
        <div className="flex items-center" key={itemName}>
                <span className="font-poppins">
                {itemName}
                </span>
                <PiCaretRight className="text-vermelho-médio"/>
            </div>
        </>
    )
}

LeftMenuItem.propTypes = {
    itemName: PropTypes.string.isRequired,
};