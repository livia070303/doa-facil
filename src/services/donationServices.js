import axios from 'axios';

// Obtendo a URL base da API a partir do ambiente
const API_URL = import.meta.env.VITE_API_URL ??  'http://localhost:8000';

export const getDonations = async () => {
  try {
    const response = await axios.get(`${API_URL}/donations`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doações:', error);
    throw error;
  }
};

export const getDonationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/donations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doação:', error);
    throw error;
  }
};

export const mostRecentsDonations = async (limit) => {
  try {
    const response = await axios.get(`${API_URL}/donations/recents`, { params: {limit } });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar doações:', error);
    throw error;
  }
};

export const postDonation = async (donationData) => {
  try {
    const response = await axios.post(`${API_URL}/donations`, donationData);
    return response.data;
  } catch (error) {
    alert()
    console.error('Erro ao criar doação:', error);
    throw error;
  }
};


export const getDonationsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/donations/category`, { params: { category } });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doações por categoria:', error);
    throw error;
  }
};

export const searchDonations = async (search) => {
  try {
    const response = await axios.get(`${API_URL}/donations/search`, { params: { search } });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar doações:', error);
    throw error;
  }
};

export const getItensDoadosByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/donations/donor/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doações favoritas do usuário:', error);
    throw error;
  }
};


export const getFavoritesByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/favorite/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doações favoritas do usuário:', error);
    throw error;
  }
};

export const createFavoritesByUser = async (dados) => {
  try {
    const response = await axios.post(`${API_URL}/user/favorite/`, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar item aos favoritos do usuário:', error);
    throw error;
  }
};

export const deleteFavoritesByUser = async (dados) => {
  try {
    const response = await axios.delete(`${API_URL}/user/favorite?userId=${dados.userId}&donationId=${dados.donationId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir item dos favoritos do usuário:', error);
    throw error;
  }
};

export const deleteDonationById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/donations/${id}`); // URL corrigida
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir a doação', error);
    throw error;
  }
};