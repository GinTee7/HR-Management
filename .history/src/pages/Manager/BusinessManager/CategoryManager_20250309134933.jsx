import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Space, Modal, Form, Switch } from 'antd';
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const CategoryManager = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [form] = Form.useForm();

    // Giả lập dữ liệu ban đầu
    useEffect(() => {
        const initialCategories = [
            {
                categoryId: 1,
                categoryName: 'Điện thoại',
                parentCategoryId: null,
                sortOrder: 1,
                notes: 'Danh mục điện thoại',
                isActive: true,
                createdBy: 'admin',
                createdDate: '2025-03-01',
                updatedBy: 'admin',
                updatedDate: '2025-03-05'
            }
            // Thêm các danh mục khác nếu cần
        ];
        setCategories(initialCategories);
        setFilteredCategories(initialCategories);
    }, []);

    const handleAddOrEditCategory = values => {
        if (editingCategory) {
            const updatedCategories = categories.map(category =>
                category.categoryId === editingCategory.categoryId
                    ? { ...editingCategory, ...values }
                    : category
            );
            setCategories(updatedCategories);
            setFilteredCategories(updatedCategories);
        } else {
            const newCategory = {
                ...values,
                categoryId: categories.length + 1,
                createdBy: 'admin',
                createdDate: new Date().toISOString().split('T')[0],
                updatedBy: 'admin',
                updatedDate: new Date().toISOString().split('T')[0]
            };
            const updatedCategories = [...categories, newCategory];
            setCategories(updatedCategories);
            setFilteredCategories(updatedCategories);
        }
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleDelete = categoryId => {
        const updatedCategories = categories.filter(
            category => category.categoryId !== categoryId
        );
        setCategories(updatedCategories);
        setFilteredCategories(updatedCategories);
    };

    const handleSearch = e => {
        const { value } = e.target;
        setSearchText(value);
        const filteredData = categories.filter(category =>
            Object.values(category).some(
                field =>
                    field &&
                    field.toString().toLowerCase().includes(value.toLowerCase())
            )
        );
        setFilteredCategories(filteredData);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'categoryId',
            key: 'categoryId',
            sorter: (a, b) => a.categoryId - b.categoryId
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'categoryName',
            key: 'categoryName',
            sorter: (a, b) => a.categoryName.localeCompare(b.categoryName)
        },
        {
            title: 'ID danh mục cha',
            dataIndex: 'parentCategoryId',
            key: 'parentCategoryId',
            sorter: (a, b) => a.parentCategoryId - b.parentCategoryId
        },
        {
            title: 'Thứ tự sắp xếp',
            dataIndex: 'sortOrder',
            key: 'sortOrder',
            sorter: (a, b) => a.sortOrder - b.sortOrder
        },
        { title: 'Ghi chú', dataIndex: 'notes', key: 'notes' },
        {
            title: 'Kích hoạt',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (isActive ? 'Có' : 'Không')
        },
        { title: 'Người tạo', dataIndex: 'createdBy', key: 'createdBy' },
        { title: 'Ngày tạo', dataIndex: 'createdDate', key: 'createdDate' },
        { title: 'Người cập nhật', dataIndex: 'updatedBy', key: 'updatedBy' },
        {
            title: 'Ngày cập nhật',
            dataIndex: 'updatedDate',
            key: 'updatedDate'
        },
        {
            title: 'Hành động',
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
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.categoryId)}
                        danger
                    >
                        Xóa
                    </Button>
                </Space>
            )
        }
    ];

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder='Tìm kiếm...'
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={handleSearch}
                />
                <Button
                    type='primary'
                    icon={<PlusOutlined />}
                    onClick={() => {
                        setEditingCategory(null);
                        form.resetFields();
                        setIsModalVisible(true);
                    }}
                >
                    Thêm danh mục
                </Button>
            </Space>
            <Table
                columns={columns}
                dataSource={filteredCategories}
                rowKey='categoryId'
                pagination={{ pageSize: 5 }}
            />
            <Modal
                title={editingCategory ? 'Chỉnh sửa danh mục' : 'Thêm danh mục'}
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
                        label='Tên danh mục'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên danh mục!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name='parentCategoryId' label='ID danh mục cha'>
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item name='sortOrder' label='Thứ tự sắp xếp'>
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item name='notes' label='Ghi chú'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name='isActive'
                        label='Kích hoạt'
                        valuePropName='checked'
                    >
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CategoryManager;
