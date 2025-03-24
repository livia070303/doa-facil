// /UserProfile/components/EditProfileModal.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../hooks/useUser";

const UserProfileSchema = z.object({
  nomeCompleto: z.string(),
  email: z.string().email(),
  telefone: z.string().optional(),
  rua: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  CEP: z.string().optional(),
  // etc...
});

const EditProfileModal = ({ onClose, userData }) => {
  const { handleUserUpdate, regionOptions } = useUser();

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      nomeCompleto: userData?.nomeCompleto || "",
      email: userData?.email || "",
      telefone: userData?.telefone || "",
      rua: userData?.rua || "",
      cidade: userData?.cidade || "",
      estado: userData?.estado || "",
      CEP: userData?.CEP || "",
    },
  });

  useEffect(() => {
    if (userData) {
      reset({
        nomeCompleto: userData?.nomeCompleto,
        email: userData?.email,
        telefone: userData?.telefone,
        rua: userData?.rua,
        cidade: userData?.cidade,
        estado: userData?.estado,
        CEP: userData?.CEP,
      });
    }
  }, [userData, reset]);

  const onSubmit = (formData) => {
    // Chamar a função handleUserUpdate do hook useUser
    handleUserUpdate({ ...formData, id: userData._id });
    // Fechar o modal
    onClose();
    // Exibir alguma mensagem de sucesso (opcional, ou usar toast).
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Conteúdo do Modal */}
      <div className="bg-white w-full max-w-2xl p-8 rounded relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-xl font-semibold mb-4">Editar Minhas Informações</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">
              Nome Completo
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                {...register("nomeCompleto")}
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700">
              Email
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                {...register("email")}
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700">
              Telefone
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                {...register("telefone")}
              />
            </label>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700">
                Endereço (Rua)
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  {...register("rua")}
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">
                Cidade
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  {...register("cidade")}
                />
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700">
                CEP
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  {...register("CEP")}
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">
                UF
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
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
          </div>

          <div className="text-right pt-4">
            <button
              type="submit"
              className="bg-azul-claro text-white py-2 px-4 rounded-md hover:bg-azul-médio"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
