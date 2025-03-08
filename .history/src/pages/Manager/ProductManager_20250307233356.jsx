import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Form, Input, Space, Modal } from 'antd';
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined
} from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const API_BASE_URL =
    'https://d1ef-2405-4800-5717-9fd0-20f0-34e8-8635-ac7a.ngrok-free.app/api/product';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [form] = Form.useForm();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}`);
            const fetchedProducts = response.data.map(product => ({
                key: product.productId,
                productId: product.productId,
                productCode: product.productCode,
                name: product.productName,
                unit: product.unit,
                defaultExpiration: product.defaultExpiration,
                categoryId: product.categoryId,
                description: product.description,
                taxId: product.taxId,
                createdBy: product.createdBy,
                createdDate: product.createdDate,
                updatedBy: product.updatedBy,
                updatedDate: product.updatedDate
            }));
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Không thể tải sản phẩm từ API!');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddOrEditProduct = async values => {
        try {
            if (editingProduct) {
                await axios.put(
                    `${API_BASE_URL}/${editingProduct.productId}`,
                    values
                );
                toast.success('Sản phẩm đã được cập nhật!');
            } else {
                await axios.post(API_BASE_URL, values);
                toast.success('Sản phẩm đã được thêm!');
            }
            fetchProducts();
            setIsModalVisible(false);
            form.resetFields();
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
            toast.error(
                editingProduct ? 'Lỗi cập nhật sản phẩm!' : 'Lỗi thêm sản phẩm!'
            );
        }
    };

    const handleDelete = async productId => {
        try {
            await axios.delete(`${API_BASE_URL}/${productId}`);
            toast.success('Sản phẩm đã được xóa!');
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Lỗi xóa sản phẩm!');
        }
    };

    const handleEdit = record => {
        setEditingProduct(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = products.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    product.productCode
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filteredData);
        } else {
            setFilteredProducts(products);
        }
    };

    const columns = [
        { title: 'Mã Sản Phẩm', dataIndex: 'productCode', key: 'productCode' },
        { title: 'Tên Sản Phẩm', dataIndex: 'name', key: 'name' },
        {
            title: 'Đơn Vị',
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true
        },
        {
            title: 'Ngày Tạo',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: date => new Date(date).toLocaleString()
        },
        {
            title: 'Thao Tác',
            key: 'actions',
            render: (_, record) => (
                <Space size='middle'>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        style={{ backgroundColor: '#D3D4D8', color: '#31473A' }}
                    >
                        Sửa
                    </Button>
                    <Button
                        type='primary'
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.productId)}
                    >
                        Xóa
                    </Button>
                </Space>
            )
        }
    ];

    return (
        <div className='p-5 bg-white rounded-lg shadow-lg'>
            <Toaster position='top-right' reverseOrder={false} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <Input
                        placeholder='Tìm kiếm sản phẩm...'
                        prefix={<SearchOutlined />}
                        style={{ marginRight: 8 }}
                        onChange={e => {
                            setSearchText(e.target.value);
                            handleFilter(e.target.value);
                        }}
                    />
                </div>
                <Button
                    icon={<PlusOutlined />}
                    onClick={() => {
                        setIsModalVisible(true);
                        setEditingProduct(null);
                        form.resetFields();
                    }}
                    style={{ backgroundColor: '#D3D4D8', color: '#31473A' }}
                >
                    Thêm Sản Phẩm
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredProducts}
                rowKey='productId'
                bordered
            />

            <Modal
                title={editingProduct ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm'}
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => form.submit()}
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={handleAddOrEditProduct}
                >
                    <Form.Item
                        name='productCode'
                        label='Mã Sản Phẩm'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mã sản phẩm!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='name'
                        label='Tên Sản Phẩm'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên sản phẩm!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name='unit' label='Đơn Vị'>
                        <Input />
                    </Form.Item>
                    <Form.Item name='description' label='Mô Tả'>
                        <Input.TextArea rows={3} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ProductManager;
