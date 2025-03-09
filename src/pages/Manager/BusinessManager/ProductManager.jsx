import { useState, useEffect } from 'react';
import { Button, Table, Form, Input, Space, Modal, Spin } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const API_URL = 'https://tight-probably-ant.ngrok-free.app/api/product';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                toast.error('Token không hợp lệ! Vui lòng đăng nhập lại.');
                return;
            }
            const response = await axios.get(API_URL, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('API Response:', response.data);
            
            const fetchedProducts = (Array.isArray(response.data) ? response.data : response.data.data || []).map(product => ({
                key: product.productId,
                productCode: product.productCode,
                name: product.productName,
                unit: product.unit,
                defaultExpiration: product.defaultExpiration,
                description: product.description,
                image: product.images?.length > 0 ? product.images[0] : '',
                createdDate: product.createdDate,
                categoryId: product.categoryId,
                taxId: product.taxId
            }));
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        } catch (error) {
            console.error('Lỗi tải sản phẩm:', error);
            toast.error('Không thể tải danh sách sản phẩm!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchProducts(); }, []);

    const handleAddOrEditProduct = async values => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                toast.error('Token không hợp lệ!');
                return;
            }
            
            const productData = {
                productCode: values.productCode,
                productName: values.name,
                description: values.description,
                unit: values.unit,
                images: values.image ? [values.image] : [],
                defaultExpiration: values.defaultExpiration,
                categoryId: 1,
                taxId: 3
            };

            if (editingProduct) {
                await axios.put(`${API_URL}/${editingProduct.key}`, productData, { headers: { Authorization: `Bearer ${token}` } });
                toast.success('Sản phẩm đã được cập nhật!');
            } else {
                await axios.post(API_URL, productData, { headers: { Authorization: `Bearer ${token}` } });
                toast.success('Sản phẩm đã được thêm!');
            }

            fetchProducts();
            setIsModalVisible(false);
            form.resetFields();
            setEditingProduct(null);
        } catch (error) {
            console.error('Lỗi xử lý sản phẩm:', error);
            toast.error('Lỗi xử lý sản phẩm!');
        }
    };

    const handleDelete = async productId => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                toast.error('Token không hợp lệ!');
                return;
            }
            await axios.delete(`${API_URL}/${productId}`, { headers: { Authorization: `Bearer ${token}` } });
            toast.success('Sản phẩm đã được xóa!');
            fetchProducts();
        } catch (error) {
            console.error('Lỗi xóa sản phẩm:', error);
            toast.error('Không thể xóa sản phẩm!');
        }
    };

    const handleEdit = record => {
        setEditingProduct(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleFilter = searchTerm => {
        setFilteredProducts(
            searchTerm ? products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.productCode.toLowerCase().includes(searchTerm.toLowerCase())
            ) : products
        );
    };

    const columns = [
        { title: 'Mã SP', dataIndex: 'productCode', key: 'productCode' },
        { title: 'Tên Sản Phẩm', dataIndex: 'name', key: 'name' },
        { title: 'Mô Tả', dataIndex: 'description', key: 'description', ellipsis: true },
        { title: 'Đơn Vị', dataIndex: 'unit', key: 'unit' },
        { title: 'Hạn Sử Dụng', dataIndex: 'defaultExpiration', key: 'defaultExpiration' },
        { title: 'Ngày Tạo', dataIndex: 'createdDate', key: 'createdDate', render: date => new Date(date).toLocaleDateString() },
        {
            title: 'Thao Tác',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>Sửa</Button>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)}>Xóa</Button>
                </Space>
            )
        }
    ];

    return (
        <div className="p-5 bg-white rounded-lg shadow-lg">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex justify-between mb-4">
                <Input placeholder="Tìm kiếm sản phẩm..." prefix={<SearchOutlined />} onChange={e => handleFilter(e.target.value)} />
                <Button icon={<PlusOutlined />} onClick={() => { setIsModalVisible(true); form.resetFields(); }}>Thêm Sản Phẩm</Button>
            </div>
            {loading ? <Spin size="large" /> : <Table columns={columns} dataSource={filteredProducts} rowKey="key" bordered />}
            <Modal title={editingProduct ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm'} open={isModalVisible} onCancel={() => setIsModalVisible(false)} onOk={() => form.submit()}>
                <Form form={form} layout="vertical" onFinish={handleAddOrEditProduct}>
                    <Form.Item name="productCode" label="Mã Sản Phẩm" rules={[{ required: true, message: 'Vui lòng nhập mã sản phẩm!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="name" label="Tên Sản Phẩm" rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ProductManager;