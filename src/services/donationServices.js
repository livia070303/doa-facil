import axios from 'axios';

// Obtendo a URL base da API a partir do ambiente
const API_URL = 'http://doa-facil-api-tkba.vercel.app';

export const getDonations = async () => {
  try {
    const response = await axios.get(`${API_URL}/donations`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter doações:', error);
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
