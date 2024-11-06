import React, { useContext } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { SectionHeader } from "../HomePage/components/SectionHeader.jsx";
import { Separator } from "../../components/Separator.jsx";
import { useUser } from "../../hooks/useUser.js";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DonationUserItemRecebidos from "./components/DonationUserItemRecebidos.jsx";
import DonationUserItemFavorite from "./components/DonationUserItemFavorite.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const UserProfileSchema = z.object({
  nome: z.string(),
  email: z.string(),
  phone: z.string(),
  logradouro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  cep: z.string(),
});

export const UserProfile = () => {
  const { data, isLoading, handleUserUpdate, regionOptions } = useUser();
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      nome: data?.user?.nomeCompleto,
      email: data?.user?.email,
      phone: data?.user?.telefone,
      logradouro: data?.user?.rua,
      cidade: data?.user?.cidade,
      estado: data?.estado,
      cep: data?.user?.CEP,
    },
  });

  React.useEffect(() => {
    if (data) {
      reset({
        nome: data?.user?.nomeCompleto,
        email: data?.user?.email,
        phone: data?.user?.telefone,
        logradouro: data?.user?.rua,
        cidade: data?.user?.cidade,
        estado: regionOptions.find((region) => region.value === data?.user.estado)?.value,
        cep: data?.user?.CEP,
      });
    }
  }, [data, reset]);

  const submitForm = async (formData) => {
    const { nome, email, phone, logradouro, cidade, estado, cep } = formData;

    const formattedData = {
      nomeCompleto: nome,
      email,
      telefone: phone,
      rua: logradouro,
      cidade,
      estado,
      CEP: cep,
      id: user,
    };

    handleUserUpdate(formattedData);
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

              {/* Main Content */}
              <main className="flex-1 bg-gray-100 p-10 contrast:bg-custom-black">
                {/* Seção de Informações do Usuário */}
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="flex-1 bg-white p-8 rounded shadow-md w-full max-w-3xl mx-auto"
                >
                  <div className="flex flex-col sm:flex-row items-center mb-6">
                    {/* Foto de Perfil */}
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0">
                      <img
                        src={data?.user?.fotoPerfil || "/avatardayelle.png"}
                        alt="Foto de Perfil"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 w-full">
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        Nome
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("nome")}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        Email
                        <input
                          type="email"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("email")}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        Telefone
                        <input
                          type="tel"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("phone")}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        Endereço
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("logradouro")}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        Cidade
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("cidade")}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        CEP
                        <input
                          type="text"
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("cep")}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700 contrast:font-bold contrast:text-custom-black ">
                        UF
                        <select
                          className="mt-1 p-1 block w-full border border-gray-300 rounded-md"
                          {...register("estado")}
                        >
                          {regionOptions.map((region) => (
                            <option key={region.value} value={region.value}>
                              {region.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-azul-claro text-white py-2 px-4 rounded-md hover:bg-azul-médio contrast:border contrast:bg-custom-yellow contrast:text-custom-black contrast:border-custom-black contrast:font-bold"
                      >
                        Editar Minhas Informações
                      </button>
                    </div>
                  </div>
                </form>

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
        </div>
      )}
    </>
  );
};
