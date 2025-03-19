import { useState } from 'react';
import './App.css';
import { Rating } from '@smastrom/react-rating';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';

interface Avaliacao {
  estrelas: number;
  comentario: string;
  produtoDoado: string;
  produtoRecebido: string;
}

function App() {
  const [estrelas, setEstrelas] = useState(0);
  const [comentario, setComentario] = useState('');
  const [produtoDoado, setProdutoDoado] = useState('');
  const [produtoRecebido, setProdutoRecebido] = useState('');
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (estrelas === 0) return;

    setAvaliacoes([...avaliacoes, { 
      estrelas, 
      comentario, 
      produtoDoado, 
      produtoRecebido 
    }]);
    setEstrelas(0);
    setComentario('');
    setProdutoDoado('');
    setProdutoRecebido('');
  }

  return (
    <div className="App">
      <div className="logo-container">
        <div className="logo-wrapper">
          <FaHandHoldingHeart className="logo donation" />
          <span className="logo-text">Doe com Amor</span>
        </div>
        <div className="logo-wrapper">
          <FaHandsHelping className="logo gift" />
          <span className="logo-text">Ajude o Próximo</span>
        </div>
      </div>

      <div className="review-section">
        <h2>Deixe sua Avaliação</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="product-inputs">
            <div className="product-input">
              <label htmlFor="produtoDoado">URL da Imagem do Produto Doado:</label>
              <input
                type="url"
                id="produtoDoado"
                value={produtoDoado}
                onChange={(e) => setProdutoDoado(e.target.value)}
                placeholder="https://exemplo.com/imagem-produto-doado.jpg"
                required
              />
            </div>
            <div className="product-input">
              <label htmlFor="produtoRecebido">URL da Imagem do Produto Recebido:</label>
              <input
                type="url"
                id="produtoRecebido"
                value={produtoRecebido}
                onChange={(e) => setProdutoRecebido(e.target.value)}
                placeholder="https://exemplo.com/imagem-produto-recebido.jpg"
                required
              />
            </div>
          </div>

          <div className="rating-container">
            <Rating
              style={{ maxWidth: 180 }}
              value={estrelas}
              onChange={setEstrelas}
              transition="zoom"
            />
          </div>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escreva seu comentário aqui..."
            className="review-textarea"
            required
          />
          <button type="submit" disabled={estrelas === 0}>
            Enviar Avaliação
          </button>
        </form>

        <div className="reviews-list">
          <h3>Avaliações</h3>
          {avaliacoes.length === 0 ? (
            <p>Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>
          ) : (
            avaliacoes.map((avaliacao, index) => (
              <div key={index} className="review-item">
                <div className="product-images">
                  <div className="product-image-container">
                    <h4>Produto Doado</h4>
                    <img 
                      src={avaliacao.produtoDoado} 
                      alt="Produto Doado"
                      className="product-image"
                    />
                  </div>
                  <div className="product-image-container">
                    <h4>Produto Recebido</h4>
                    <img 
                      src={avaliacao.produtoRecebido} 
                      alt="Produto Recebido"
                      className="product-image"
                    />
                  </div>
                </div>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={avaliacao.estrelas}
                  readOnly
                />
                <p className="review-comment">{avaliacao.comentario}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;