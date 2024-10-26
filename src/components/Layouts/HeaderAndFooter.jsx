import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import { Breadcrumb } from '../Breadcrumb'; // Caminho corrigido
import { useLocation } from 'react-router-dom';

export function HeaderAndFooter({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      
      {/* Exibir o breadcrumb em todas as páginas, exceto na inicial */}
      {location.pathname !== '/' && <Breadcrumb />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export function HeaderAndFooterContainer({ children, className }) {
  return (
    <div className={`min-h-[80vh] w-full ${className}`}>
      {children}
    </div>
  );
}

HeaderAndFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

HeaderAndFooterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
