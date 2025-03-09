import axios from 'axios';

const API_BASE_URL =
    'https://5b27-2405-4802-9171-74d0-2891-e238-b764-2156.ngrok-free.app/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// const attachToken = () => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
//   }
// };

// Hàm dùng chung để gọi API
export const fetchData = async endpoint => {
    attachToken();
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API Fetch Error:', error);
        throw error;
    }
};

// API đăng nhập
export const login = async ({ username, password }) => {
    try {
        const response = await apiClient.post('/auth/login', {
            username,
            password
        });
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

// API đăng ký
export const register = async userData => {
    try {
        const response = await apiClient.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Register Error:', error);
        throw error;
    }
};

// CRUD cho Products

// Lấy danh sách sản phẩm
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

// Lấy sản phẩm theo ID
export const getProductById = async id => {
    attachToken();
    try {
        const response = await apiClient.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Get Product By ID Error:', error);
        throw error;
    }
};

// Tạo sản phẩm mới
export const createProduct = async productData => {
    attachToken();
    try {
        const response = await apiClient.post('/products', productData);
        return response.data;
    } catch (error) {
        console.error('Create Product Error:', error);
        throw error;
    }
};

// Cập nhật sản phẩm theo ID
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

// Xóa sản phẩm theo ID
export const deleteProduct = async id => {
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
