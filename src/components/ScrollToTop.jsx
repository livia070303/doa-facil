// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que o pathname mudar, rola para o topo
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
