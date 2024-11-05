import React from "react";
import { Link, useLocation } from "react-router-dom";

// Mapeamento de nomes amigáveis para as páginas
const pageNames = {
  "home": "Página Inicial",
  "user": "Perfil",
  "history": "Histórico",
  "create": "Cadastro de doação",
  "create-needed": "Cadastro de solicitação",
  "product": "Produto",
  "faq": "Perguntas frequentes",
  "cart": "Carrinho",
  "checkout": "Finalização",
  "chat": "Chat",
  "requirements-list": "Produtos solicitados",
  "product-selection": "Seleção de Produtos",
  // Adicione outros mapeamentos conforme necessário
};

export function Breadcrumb() {
  const location = useLocation();

  // Obter os segmentos do caminho da URL atual
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Páginas onde o breadcrumb não deve ser exibido
  const hiddenPages = ["/", "/login", "/register", "/reset-password"];

  // Verificar se a página atual está na lista de páginas ocultas
  if (hiddenPages.includes(location.pathname)) {
    return null; // Não renderizar o breadcrumb
  }

  // Estilos inline para o breadcrumb
  const breadcrumbStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "8px 16px",
    backgroundColor: "#f8f9fa",
    listStyle: "none",
    borderRadius: "4px",
  };

  const breadcrumbItemStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
  };

  const activeItemStyle = {
    fontWeight: "bold",
    color: "#6c757d",
  };

  const separatorStyle = {
    margin: "0 5px",
  };

  return (
    <nav aria-label="breadcrumb">
      <ol style={breadcrumbStyle}>
        {/* Modificação: Renomear "Home" para "Página Inicial" */}
        <li style={breadcrumbItemStyle}>
          <Link to="/" style={linkStyle}>Página Inicial</Link>
          {pathnames.length > 0 && <span style={separatorStyle}>&gt;</span>}
        </li>
        {pathnames.map((value, index) => {
          // Criar o caminho acumulado até o índice atual
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Obter o nome amigável do segmento da URL
          const pageName = pageNames[value] || decodeURIComponent(value);

          // Se for o último segmento, desabilitar o link
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={to}>
              <li style={breadcrumbItemStyle}>
                {isLast ? (
                  <span style={activeItemStyle}>{pageName}</span>
                ) : (
                  <Link to={to} style={linkStyle}>
                    {pageName}
                  </Link>
                )}
              </li>
              {!isLast && <span style={separatorStyle}>&gt;</span>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
