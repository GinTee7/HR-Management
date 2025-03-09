import React, { useState, useEffect } from 'react';
import {
    Table,
    Button,
    Input,
    Space,
    Modal,
    Form,
    Switch,
    message,
    Popconfirm
} from 'antd';
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const CategoryManager = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [form] = Form.useForm();

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
            message.success('Cập nhật danh mục thành công!');
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
            message.success('Thêm danh mục thành công!');
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
        message.success('Xóa danh mục thành công!');
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
            title: 'Hành động',
            key: 'actions',
            fixed: 'right',
            render: (_, record) => (
                <Space size='middle'>
                    <Button
                        type='primary'
                        icon={<EditOutlined />}
                        onClick={() => {
                            setEditingCategory(record);
                            form.setFieldsValue(record);
                            setIsModalVisible(true);
                        }}
                    >
                        Sửa
                    </Button>
                    <Popconfirm
                        title='Bạn có chắc muốn xóa danh mục này?'
                        onConfirm={() => handleDelete(record.categoryId)}
                        okText='Có'
                        cancelText='Không'
                    >
                        <Button icon={<DeleteOutlined />} danger>
                            Xóa
                        </Button>
                    </Popconfirm>
                </Space>
            )
        }
    ];

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder='Nhập từ khóa tìm kiếm...'
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
                scroll={{ x: 1000 }}
            />
            <Modal
                title={editingCategory ? 'Chỉnh sửa danh mục' : 'Thêm danh mục'}
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => form.submit()}
                width={600}
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
                        {' '}
                        <Input placeholder='Nhập tên danh mục' />{' '}
                    </Form.Item>
                    <Form.Item name='parentCategoryId' label='ID danh mục cha'>
                        {' '}
                        <Input
                            type='number'
                            placeholder='Nhập ID danh mục cha'
                        />{' '}
                    </Form.Item>
                    <Form.Item name='sortOrder' label='Thứ tự sắp xếp'>
                        {' '}
                        <Input
                            type='number'
                            placeholder='Nhập thứ tự sắp xếp'
                        />{' '}
                    </Form.Item>
                    <Form.Item name='notes' label='Ghi chú'>
                        {' '}
                        <Input.TextArea placeholder='Nhập ghi chú' />{' '}
                    </Form.Item>
                    <Form.Item
                        name='isActive'
                        label='Kích hoạt'
                        valuePropName='checked'
                    >
                        <Switch checkedChildren='Bật' unCheckedChildren='Tắt' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CategoryManager;
