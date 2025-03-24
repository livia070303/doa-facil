import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { SectionHeader } from "../HomePage/components/SectionHeader.jsx";
import { Separator } from "../../components/Separator.jsx";
import { useUser } from "../../hooks/useUser.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import EditProfileModal from "./components/EditProfileModal";
import DonationUserItemFavorite from "./components/DonationUserItemFavorite.jsx";

export const UserProfile = () => {
  const { data, isLoading } = useUser();
  const { user } = useContext(AuthContext);

  // Estado para abrir/fechar o pop-up
  const [showEditModal, setShowEditModal] = useState(false);

  // Função que abre o modal
  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  // Função que fecha o modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-1">
            <div className="hidden md:flex">
              <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
              <div className="md:hidden">
                <MobileHeader />
              </div>

              <main className="flex-1 bg-gray-100 p-10 contrast:bg-custom-black">
                {/* Seção de Informações do Usuário */}
                <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center mb-6">
                    {/* Foto de Perfil */}
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0">
                      <img
                        src="/avatardayelle.png"
                        alt="Foto de Perfil"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Somente visualização */}
                    <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 w-full">
                      <label className="block text-gray-700">
                        Nome
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.nomeCompleto || ""}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700">
                        Email
                        <input
                          type="email"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.email || ""}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Telefone
                        <input
                          type="tel"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.telefone || ""}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700">
                        Endereço
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.rua || ""}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Cidade
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.cidade || ""}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-gray-700">
                        CEP
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.CEP || ""}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        UF
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                          readOnly
                          value={data?.user?.estado || ""}
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-full bg-azul-claro text-white py-2 px-4 rounded-md hover:bg-azul-médio"
                        onClick={handleOpenEditModal}
                      >
                        Editar Minhas Informações
                      </button>
                    </div>
                  </div>
                </div>

                <Separator className="my-8 h-0.5 bg-gray-200" />

                {/* Favoritos */}
                <section className="mt-12 mb-8" id="favoritos">
                  <SectionHeader label="Favoritos" title="Itens Favoritos" />
                  <DonationUserItemFavorite />
                </section>
              </main>
            </div>
          </div>
          <Footer />

          {/* Modal de edição */}
          {showEditModal && (
            <EditProfileModal onClose={handleCloseEditModal} userData={data?.user} />
          )}
        </div>
      )}
    </>
  );
};

export default UserProfile;
