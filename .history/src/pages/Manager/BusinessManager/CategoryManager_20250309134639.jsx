import { useState } from 'react';
import { Table, Input, Button, Modal, Form, Space, Switch } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const CategoryManager = () => {
    const [categories, setCategories] = useState([
        {
            categoryId: 1,
            categoryName: 'Điện thoại',
            parentCategoryId: null,
            sortOrder: 1,
            notes: 'Các loại điện thoại di động',
            isActive: true,
            createdBy: 'admin',
            createdDate: '2025-03-01T10:00:00Z',
            updatedBy: 'admin',
            updatedDate: '2025-03-01T10:00:00Z'
        },
        {
            categoryId: 2,
            categoryName: 'Laptop',
            parentCategoryId: null,
            sortOrder: 2,
            notes: 'Các loại máy tính xách tay',
            isActive: true,
            createdBy: 'admin',
            createdDate: '2025-03-01T10:00:00Z',
            updatedBy: 'admin',
            updatedDate: '2025-03-01T10:00:00Z'
        }
    ]);
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [form] = Form.useForm();

    const handleAddOrEditCategory = values => {
        if (editingCategory) {
            const updatedCategories = categories.map(category =>
                category.categoryId === editingCategory.categoryId
                    ? { ...editingCategory, ...values, updatedDate: new Date().toISOString() }
                    : category
            );
            setCategories(updatedCategories);
            toast.success('Danh mục đã được cập nhật!');
        } else {
            const newCategory = {
                ...values,
                categoryId: categories.length + 1,
                createdBy: 'admin',
                createdDate: new Date().toISOString(),
                updatedBy: 'admin',
                updatedDate: new Date().toISOString()
            };
            setCategories([...categories, newCategory]);
            toast.success('Danh mục mới đã được thêm!');
        }
        setIsModalVisible(false);
        form.resetFields();
        setEditingCategory(null);
    };

    const handleDelete = categoryId => {
        const updatedCategories = categories.filter(category => category.categoryId !== categoryId);
        setCategories(updatedCategories);
        toast.success('Danh mục đã được xóa!');
    };

    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = categories.filter(
                category =>
                    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCategories(filteredData);
        } else {
            setFilteredCategories(categories);
        }
    };

    const columns = [
        { title: 'Tên Danh Mục', dataIndex: 'categoryName', key: 'categoryName' },
        { title: 'Ghi Chú', dataIndex: 'notes', key: 'notes', ellipsis: true },
        {
            title: 'Trạng Thái',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (isActive ? 'Hoạt động' : 'Không hoạt động')
        },
        {
            title: 'Thao Tác',
            key: 'actions',
            render: (_, record) => (
                <Space size='middle'>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setEditingCategory(record);
                            form.setFieldsValue(record);
                            setIsModalVisible(true);
                        }}
                    >
                        Sửa
                    </Button>
                    <Button
                        type='primary'
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.categoryId)}
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
                >
                    Thêm Danh Mục
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredCategories}
                rowKey='categoryId'
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
                        name='categoryName'
                        label='Tên Danh Mục'
                        rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name='notes' label='Ghi Chú'>
                        <Input.TextArea rows={3} />
                    </Form.Item>
                    <Form.Item
                        name='isActive'
                        label='Trạng Thái
::contentReference[oaicite:0]{index=0}
 
