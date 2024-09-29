import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

export function HeaderAndFooter({ children }){
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Header/>
            <main className='flex-grow'>
            {children}
            </main>
            <Footer/>
        </div>
    )
}

export function HeaderAndFooterContainer({ children, className } ){
    return (
        <div className={`min-h-[80vh] w-full ${className}`}>
            {children}
        </div>
    )
}


HeaderAndFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

HeaderAndFooterContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
