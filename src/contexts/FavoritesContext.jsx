// FavoritesContext.js
import { createContext, useContext, useState, useEffect } from "react";
import {
  createFavoritesByUser,
  deleteFavoritesByUser,
  getFavoritesByUser,
} from "../services/donationServices";
import { AuthContext } from "./AuthContext";
import { api } from "../lib/api";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [userId, setUserId] = useState();
  const { user} = useContext(AuthContext);
  

  useEffect(() => {
    const fetchUserInfoAndFavorites = async () => {
      const response = await geUserInfoApi();
      if (response) {
        setUserId(response);
        await fetchFavoritesFromApi(response);
      }
    };
    fetchUserInfoAndFavorites();
  }, [user]);

  const geUserInfoApi = async () => {
    try {
      const response = await api.get(`/user/${user}`);
      return response.data?.user?._id || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // Função para buscar favoritos do backend
  const fetchFavoritesFromApi = async (userIdParam) => {
    try {
      const data = await getFavoritesByUser(userIdParam || userId);
      console.log(data);
      setFavorites(data?.favorite || []);
      setFavoritesCount(data?.favorite?.length || 0);
    } catch (error) {
      console.error("Erro ao buscar itens favoritos:", error);
    }
  };

  // Função para verificar se um item é favorito
  const isFavorite = (donationId) => {
    return favorites.some(
      (favorite) => favorite.donationId?._id === donationId
    );
  };

  // Função para alternar favoritos
  const toggleFavorite = async (isFavorited, idUser, donationId) => {
    const model = {
      userId: idUser,
      donationId: String(donationId),
    };

    try {
      if (isFavorited) {
        const response = await deleteFavoritesByUser(model);
        console.log("Item excluído dos favoritos com sucesso:", response);
      } else {
        const response = await createFavoritesByUser(model);
        console.log("Item adicionado aos favoritos com sucesso:", response);
      }

      fetchFavoritesFromApi(idUser);
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, favoritesCount, isFavorite, toggleFavorite, fetchFavoritesFromApi }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
