import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

export function Container({ children }){
    return (
        <div className='w-screen min-h-screen flex flex-col justify-between'>
            <Header/>
            <main className='flex-grow'>
            {children}
            </main>
            <Footer/>
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};