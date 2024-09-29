import PropTypes from 'prop-types';

export function Separator({className}){
    return(
        <>
        <div className={`w-full bg-low-gray ${className}`}/>
        </>
    )
}

Separator.propTypes = {
    className: PropTypes.string
};