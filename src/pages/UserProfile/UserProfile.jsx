import Sidebar from './components/Sidebar.jsx';
import DonationItem from '../../components/DonationItem/DonationItem.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const UserProfile = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
            {/* Container flex para Sidebar e Conteúdo Principal */}
            <div className="flex flex-1">
                {/* Sidebar para telas grandes */}
                <div className="hidden md:flex">
                    <Sidebar />
                </div>

                {/*Área do conteúdo principal*/}
                <div className="flex-1 flex flex-col">

                    {/* Header para telas pequenas */}
                    <div className="md:hidden">
                        <MobileHeader />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 bg-gray-100 p-10">
                    {/* Seção de Informações do Usuário */} 
                    <section className="flex-1 bg-white p-8 rounded shadow-md w-full max-w-3xl mx-auto">
                    {/* Informações do Usuário */}

                    <div className="flex flex-col sm:flex-row items-center mb-6">
                        {/* Foto de Perfil */}
                        <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0">
                        <img src="/path/to/profile.jpg" alt="Foto de Perfil" className="w-full h-full rounded-full object-cover" />
                        </div>
                        {/* Nome */}
                        <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 w-full">
                        <label className="block text-gray-700">Nome</label>
                        <input type="text" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="Nome do Usuário" readOnly />
                        </div>
                    </div>
                    {/* Linha: Email e Telefone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="email@exemplo.com" readOnly />
                        </div>
                        <div>
                        <label className="block text-gray-700">Telefone</label>
                        <input type="tel" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="(00) 00000-0000" readOnly />
                        </div>
                    </div>
                    {/* Linha: Endereço e Cidade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                        <label className="block text-gray-700">Endereço</label>
                        <input type="text" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="Rua Exemplo, 123" readOnly />
                        </div>
                        <div>
                        <label className="block text-gray-700">Cidade</label>
                        <input type="text" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="Cidade Exemplo" readOnly />
                        </div>
                    </div>
                    {/* Linha: CEP, UF e Botão */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                        <div>
                        <label className="block text-gray-700">CEP</label>
                        <input type="text" className="mt-1 p-1 block w-full border border-gray-300 rounded-md" value="00000-000" readOnly />
                        </div>
                        <div>
                        <label className="block text-gray-700">UF</label>
                        <select className="mt-1 p-1 block w-full border border-gray-300 rounded-md" disabled>
                            <option>SP</option>
                            {/* Outras opções */}
                        </select>
                        </div>
                        <div>
                        <button className="w-full bg-azul-claro text-white py-2 px-4 rounded-md hover:bg-azul-médio">
                            Editar Minhas Informações
                        </button>
                        </div>
                    </div>
                </section>

                    {/* Minhas Doações */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Itens Doados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Exemplo de itens */}
                            <DonationItem
                                image="/path/to/item1.jpg"
                                title="Produto 1"
                                description="Descrição do produto 1"
                            />
                            <DonationItem
                                image="/path/to/item2.jpg"
                                title="Produto 2"
                                description="Descrição do produto 2"
                            />
                            <DonationItem
                                image="/path/to/item3.jpg"
                                title="Produto 3"
                                description="Descrição do produto 3"
                            />
                            <DonationItem
                                image="/path/to/item3.jpg"
                                title="Produto 4"
                                description="Descrição do produto 3"
                            />
                        </div>
                    </section>
                    {/* Itens Recebidos */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Itens Recebidos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Exemplo de itens */}
                            <DonationItem
                                image="/path/to/item4.jpg"
                                title="Produto 4"
                                description="Descrição do produto 4"
                            />
                            <DonationItem
                                image="/path/to/item5.jpg"
                                title="Produto 5"
                                description="Descrição do produto 5"
                            />
                            <DonationItem
                                image="/path/to/item6.jpg"
                                title="Produto 6"
                                description="Descrição do produto 6"
                            />
                            <DonationItem
                                image="/path/to/item3.jpg"
                                title="Produto 7"
                                description="Descrição do produto 3"
                            />
                        </div>
                    </section>
                </main>
                </div>
            </div>  
            <Footer/>  
        </div> 
        </>
    );
};


