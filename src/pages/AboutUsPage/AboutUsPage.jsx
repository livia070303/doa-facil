import React from "react";
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter.jsx';

export function AboutUsPage() {
  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer>
        {/* Contêiner geral sem margens fixas */}
        <div className="px-4 sm:px-8 lg:px-[150px] flex flex-col">
          {/* PRIMEIRO TÓPICO */}
          <section className="flex flex-col md:flex-row justify-between items-start mt-8">
            {/* Bloco de texto à esquerda */}
            <div className="md:w-1/2 flex flex-col mb-6 md:mb-0">
              <span className="text-sm text-gray-500 mb-2">
                Sobre nós
              </span>
              <h1 className="text-[36px] sm:text-[48px] font-semibold text-black leading-tight mb-2">
                DoaFácil: Conectando Solidariedade
              </h1>
              <p className="text-xl sm:text-3xl text-black leading-snug">
                Um projeto que tem por objetivo conectar pessoas e comunidades para a Ação Social.
              </p>
            </div>

            {/* Imagem do DoaFácil à direita */}
            <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="/logoRecortado.png"
                alt="Logo DoaFácil"
                className="w-full sm:w-[330px] h-auto object-contain"
              />
            </div>
          </section>

          {/* Espaçamento de 70px */}
          <div className="mt-[70px]">
            {/* Parágrafo centralizado */}
            <p className="text-center text-base text-gray-800 leading-relaxed">
              Bem-vindo ao DoaFácil, uma plataforma criada para conectar doadores e beneficiários
              de forma simples e solidária. 
            </p>
            <p className="text-center text-base text-gray-800 leading-relaxed">  
              Conheça abaixo nossa história, nossos valores e a
              parceria com o Projeto Varal Solidário.
            </p>
          </div>

          {/* Espaçamento de 70px */}
          <div className="mt-[70px]">
            {/* PROJETO INTEGRADOR */}
            <h2 className="text-center font-semibold text-2xl mb-8">
              Projeto Integrador
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Imagem à esquerda */}
              <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                <img
                  src="/fotoComRita.png"
                  alt="Foto com Rita"
                  className="w-full sm:w-[600px] h-auto object-cover"
                />
              </div>

              {/* Texto à direita */}
              <div className="md:w-1/2 md:pl-8 text-justify leading-relaxed">
                <p className="mb-2">
                  O DoaFácil nasceu do nosso Projeto Integrador na UNIVESP,
                  com o objetivo de resolver problemas enfrentados pela comunidade do Varal Solidário,
                  uma ONG que realiza a coleta e doação de roupas. Através de uma plataforma web acessível e intuitiva,
                  buscamos conectar doadores e beneficiários de maneira eficiente, superando a desconexão e a má distribuição de recursos.
                </p>
                <p>
                   A solução foi desenvolvida com tecnologias modernas, como frameworks web, 
                  banco de dados, nuvem, APIs, e recursos de acessibilidade, atendendo aos requisitos do nosso projeto integrador. 
                  A plataforma permite que doadores acompanhem suas contribuições em tempo real,
                  enquanto beneficiários podem solicitar doações de forma anônima e direta, promovendo uma gestão mais transparente e inclusiva.
                </p>
                <p>
                  Com o DoaFácil, buscamos transformar o processo de doação em algo mais ágil,
                  acessível e confiável, apoiando a cultura de solidariedade e a inclusão social.
                </p>
              </div>
            </div>
          </div>

          {/* Espaçamento */}
          <div className="mt-[70px]">
            {/* VARAL SOLIDÁRIO MÓVEL */}
            <h2 className="text-center font-semibold text-2xl mb-8">
              Varal Solidário Móvel
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Texto à esquerda */}
              <div className="md:w-1/2 text-justify leading-relaxed mb-6 md:mb-0">
                <p className="mb-2">
                  O Projeto Varal Solidário Móvel, coordenado pela professora Rita de Cássia Machado,
                  nasceu em 2021 com a missão de promover a solidariedade e oferecer recursos essenciais para aqueles que mais precisam.
                  O projeto visa levar roupas, calçados e brinquedos gratuitos para famílias em situação de vulnerabilidade, 
                  tanto na zona urbana quanto rural, contribuindo para a redução do desperdício e incentivando práticas de sustentabilidade.
                </p>
                <p>
                  A proposta central do projeto é fornecer esses itens de forma acessível,
                  garantindo que as famílias possam contar com recursos básicos sem custos,
                  ao mesmo tempo em que promove a economia circular e a reutilização de bens. 
                  A cada nova campanha, o Varal Solidário Móvel fortalece a cultura de comunidade e apoio mútuo,
                  incentivando a participação ativa de todos.
                </p>
              </div>

              {/* Logo do Varal Solidário à direita */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                  src="/logoVaralSolidario.png"
                  alt="Logo Varal Solidário"
                  className="w-full sm:w-[450px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Espaçamento */}
          <div className="mt-[70px] mb-[70px] text-center">
            {/* CALL TO ACTION */}
            <h3 className="font-semibold text-xl mb-4">
              Quer transformar solidariedade em ação?
            </h3>
            <p className="text-base mb-6 mx-auto max-w-2xl leading-relaxed">
              Cadastre-se no DoaFácil e ajude o Varal Solidário a levar esperança a quem mais precisa.
              Clique no botão abaixo para doar, receber ou saber mais sobre as próximas campanhas de
              arrecadação. Junte-se a nós e faça parte dessa rede de colaboração!
            </p>
            <button className="bg-vermelho-escuro hover:bg-azul-claro text-white font-bold py-3 px-6 rounded-md">
              Cadastre-se
            </button>
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
}

export default AboutUsPage;
