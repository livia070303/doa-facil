import PropTypes from 'prop-types';

export function Container({ children }){
    return (
        <div className='w-screen min-h-screen'>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};