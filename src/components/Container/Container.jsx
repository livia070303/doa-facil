import PropTypes from 'prop-types';
import './Container.css';

export function Container({ children }){
    return (
        <div className="container">
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};