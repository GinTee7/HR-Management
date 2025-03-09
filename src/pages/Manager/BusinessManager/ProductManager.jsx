import { useState, useEffect } from 'react';
import { Button, Table, Form, Input, Space, Modal } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

// Token lấy từ localStorage (hoặc thay thế bằng token cố định)
const token = localStorage.getItem('authToken'); 

const API_URL = 'https://79c3-2405-4802-9171-74d0-c448-f85b-9980-17ce.ngrok-free.app/api/product';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [form] = Form.useForm();

    // Fetch danh sách sản phẩm
    const fetchProducts = () => {
        axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            const fetchedProducts = response.data.map(product => ({
                key: product.productId,
                name: product.productName,
                price: product.availableStock,
                description: product.description,
                image: product.images.length > 0 ? product.images[0] : '',
                createdDate: product.createdDate,
                unit: product.unit,
                categoryId: product.categoryId,
                taxId: product.taxId
            }));
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        })
        .catch(error => {
            console.error('Lỗi tải sản phẩm:', error);
            toast.error('Không thể tải danh sách sản phẩm!');
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Thêm hoặc cập nhật sản phẩm
    const handleAddOrEditProduct = values => {
        const productData = {
            productName: values.name,
            description: values.description,
            unit: values.unit,
            images: values.image ? [values.image] : [],
            availableStock: values.price,
            categoryId: 1,
            taxId: 3
        };

        if (editingProduct) {
            axios.put(`${API_URL}/${editingProduct.key}`, productData, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(() => {
                toast.success('Sản phẩm đã được cập nhật!');
                fetchProducts();
                setIsModalVisible(false);
                form.resetFields();
                setEditingProduct(null);
            })
            .catch(error => {
                console.error('Lỗi cập nhật sản phẩm:', error);
                toast.error('Lỗi cập nhật sản phẩm!');
            });
        } else {
            axios.post(API_URL, productData, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(() => {
                toast.success('Sản phẩm đã được thêm!');
                fetchProducts();
                setIsModalVisible(false);
                form.resetFields();
            })
            .catch(error => {
                console.error('Lỗi thêm sản phẩm:', error);
                toast.error('Lỗi thêm sản phẩm!');
            });
        }
    };

    // Xóa sản phẩm
    const handleDelete = productId => {
        axios.delete(`${API_URL}/${productId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            toast.success('Sản phẩm đã được xóa!');
            fetchProducts();
        })
        .catch(error => {
            console.error('Lỗi xóa sản phẩm:', error);
            toast.error('Không thể xóa sản phẩm!');
        });
    };

    // Chỉnh sửa sản phẩm
    const handleEdit = record => {
        setEditingProduct(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    // Lọc sản phẩm theo từ khóa
    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = products.filter(
                product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.price.toString().includes(searchTerm)
            );
            setFilteredProducts(filteredData);
        } else {
            setFilteredProducts(products);
        }
    };

    // Cấu hình cột Table
    const columns = [
        {
            title: 'Hình Ảnh',
            dataIndex: 'image',
            key: 'image',
            render: image => (
                image ? (
                    <img src={image} alt="Sản phẩm" className="object-cover w-16 h-16 border rounded" />
                ) : 'Không có ảnh'
            )
        },
        { title: 'Tên Sản Phẩm', dataIndex: 'name', key: 'name' },
        {
            title: 'Giá (VNĐ)',
            dataIndex: 'price',
            key: 'price',
            render: price => `${Number(price).toLocaleString()} đ`,
            sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price)
        },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true
        },
        {
            title: 'Đơn Vị',
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: 'Ngày Tạo',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: createdDate => new Date(createdDate).toLocaleDateString()
        },
        {
            title: 'Thao Tác',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} style={{ backgroundColor: '#D3D4D8', color: '#31473A' }}>
                        Sửa
                    </Button>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)}>
                        Xóa
                    </Button>
                </Space>
            )
        }
    ];

    return (
        <div className="p-5 bg-white rounded-lg shadow-lg">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="flex justify-between mb-4">
                <Input placeholder="Tìm kiếm sản phẩm..." prefix={<SearchOutlined />} onChange={e => handleFilter(e.target.value)} />
                <Button icon={<PlusOutlined />} onClick={() => { setIsModalVisible(true); form.resetFields(); }} style={{ backgroundColor: '#D3D4D8', color: '#31473A' }}>
                    Thêm Sản Phẩm
                </Button>
            </div>

            <Table columns={columns} dataSource={filteredProducts} rowKey="key" bordered />

            <Modal title={editingProduct ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm'} visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onOk={() => form.submit()}>
                <Form form={form} layout="vertical" onFinish={handleAddOrEditProduct}>
                    <Form.Item name="image" label="Hình Ảnh">
                        <Input placeholder="Nhập URL hình ảnh" />
                    </Form.Item>
                    <Form.Item name="name" label="Tên Sản Phẩm" rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Giá" rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}>
                        <Input type="number" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ProductManager;
