import axios from 'axios';

const API_BASE_URL = 'https://adc0-2405-4802-9034-2ac0-84e3-c710-eaea-c03d.ngrok-free.app/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const attachToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
};

export const fetchData = async (endpoint) => {
  attachToken();
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

export const login = async ({ username, password }) => {
  try {
    const response = await apiClient.post('/auth/login', { username, password });
    const { token } = response.data;
    if (token) {
      localStorage.setItem('token', token);
      apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Register Error:', error);
    throw error;
  }
};
// CRUD for Products
export const getProducts = async () => {
  attachToken();
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Get Products Error:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  attachToken();
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Get Product By ID Error:', error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  attachToken();
  try {
    const response = await apiClient.post('/products', productData);
    return response.data;
  } catch (error) {
    console.error('Create Product Error:', error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  attachToken();
  try {
    const response = await apiClient.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error('Update Product Error:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  attachToken();
  try {
    const response = await apiClient.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Delete Product Error:', error);
    throw error;
  }
};

export default apiClient;
