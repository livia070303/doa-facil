import { useState } from 'react';
import { HeaderAndFooter } from '../../components/Layouts/HeaderAndFooter.jsx';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    numeroComplemento: '',
    cidade: '',
    pontoReferencia: '',
    telefone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <HeaderAndFooter>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Endereço de Retirada</h2>
        </div>

        {/* Formulário de Endereço */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { label: 'Nome', name: 'nome', type: 'text' },
              { label: 'Endereço', name: 'endereco', type: 'text' },
              { label: 'Número e complemento (opcional)', name: 'numeroComplemento', type: 'text' },
              { label: 'Cidade', name: 'cidade', type: 'text' },
              { label: 'Ponto de referência', name: 'pontoReferencia', type: 'text' },
              { label: 'Número de Telefone', name: 'telefone', type: 'text', isError: true },
              { label: 'Endereço de e-mail', name: 'email', type: 'email' }
            ].map((input, idx) => (
              <div key={idx} className="space-y-2">
                <label
                  htmlFor={input.name}
                  className={`block text-sm ${input.isError ? 'text-[#db4444]' : 'text-gray-500'}`}
                >
                  {input.label}
                </label>
                <input
                  id={input.name}
                  name={input.name}
                  type={input.type}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full p-3 bg-neutral-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fc4638]"
                />
              </div>
            ))}
          </div>

          {/* Resumo do Pedido */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { name: 'LCD Monitor', img: '/img/lcd-monitor.png' },
                { name: 'H1 Gamepad', img: '/img/h1-gamepad.png' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12" />
                  <span className="flex-1 text-black">{item.name}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-[#fc4638] text-white rounded-md font-medium hover:bg-[#d83e31] transition">
              Fazer Pedido
            </button>
          </div>
        </div>
      </div>
    </HeaderAndFooter>
  );
};

export default CheckoutPage;
