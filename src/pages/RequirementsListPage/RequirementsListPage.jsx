import { HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter.jsx';

const RequirementsListPage = () => {
  const products = [
    {
      id: 1,
      name: 'Casaco de frio',
      size: 'Tamanho M',
      image: '/img/jacket.png',
    },
    {
      id: 2,
      name: 'Bolsa de mão',
      size: 'Tamanho G',
      image: '/img/handbag.png',
    },
    {
      id: 3,
      name: 'Estrante de livros',
      size: 'Tamanho M',
      image: '/img/book-shelf.png',
    },
    {
      id: 4,
      name: 'Cadeira',
      quantity: '4 unidades',
      image: '/img/chair.png',
      discount: '-25%',
    },
  ];

  return (
    <HeaderAndFooterContainer>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Título */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Produtos Necessitados</h2>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg p-4 relative overflow-hidden">
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                  {product.discount}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mx-auto"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <div className="text-red-500 font-medium mt-2">
                  {product.size || product.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HeaderAndFooterContainer>
  );
};

export default RequirementsListPage;
