import { useState } from 'react';
import { Button, Table, Form, Input, Space, Modal } from 'antd';
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined
} from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const CategoryManager = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [form] = Form.useForm();

    const handleAddOrEditCategory = values => {
        if (editingCategory) {
            setCategories(prevCategories =>
                prevCategories.map(category =>
                    category.key === editingCategory.key
                        ? { ...values, key: editingCategory.key }
                        : category
                )
            );
            toast.success('Danh mục đã được cập nhật!');
        } else {
            const newCategory = { ...values, key: Date.now().toString() };
            setCategories(prevCategories => [...prevCategories, newCategory]);
            toast.success('Danh mục đã được thêm!');
        }
        setIsModalVisible(false);
        form.resetFields();
        setEditingCategory(null);
        handleFilter(searchText);
    };

    const handleDelete = key => {
        setCategories(prevCategories =>
            prevCategories.filter(category => category.key !== key)
        );
        toast.success('Danh mục đã được xóa!');
        handleFilter(searchText);
    };

    const handleEdit = record => {
        setEditingCategory(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = categories.filter(
                category =>
                    category.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    category.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
            setFilteredCategories(filteredData);
        } else {
            setFilteredCategories(categories);
        }
    };

    const columns = [
        { title: 'Tên Danh Mục', dataIndex: 'name', key: 'name' },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true
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
                        onClick={() => handleDelete(record.key)}
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
                <Input
                    placeholder='Tìm kiếm danh mục...'
                    prefix={<SearchOutlined />}
                    style={{ marginRight: 8 }}
                    onChange={e => {
                        setSearchText(e.target.value);
                        handleFilter(e.target.value);
                    }}
                />
                <Button
                    icon={<PlusOutlined />}
                    onClick={() => {
                        setIsModalVisible(true);
                        setEditingCategory(null);
                        form.resetFields();
                    }}
                    style={{ backgroundColor: '#D3D4D8', color: '#31473A' }}
                >
                    Thêm Danh Mục
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredCategories}
                rowKey='key'
                bordered
            />

            <Modal
                title={editingCategory ? 'Cập Nhật Danh Mục' : 'Thêm Danh Mục'}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => form.submit()}
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={handleAddOrEditCategory}
                >
                    <Form.Item
                        name='name'
                        label='Tên Danh Mục'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên danh mục!'
                            }
                        ]}
                    >
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

export default CategoryManager;
