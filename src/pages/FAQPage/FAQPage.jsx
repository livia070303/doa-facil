// src/pages/FAQPage.jsx
import React from 'react';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter.jsx'
import FAQSection from './components/FAQSection.jsx';
import ContactForm from './components/ContactForm.jsx';

export const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAndFooter>
      <HeaderAndFooterContainer className="flex"> 

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Seção de FAQ */}
        <FAQSection />

        {/* Formulário de Contato */}
        <ContactForm />
      </main>

      </HeaderAndFooterContainer> 
      </HeaderAndFooter> 
    </div>
  );
};


