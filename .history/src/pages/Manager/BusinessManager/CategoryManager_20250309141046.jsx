import React, { useState, useEffect } from 'react';
import {
    Table,
    Button,
    Input,
    Space,
    Modal,
    Form,
    Switch,
    Card,
    Tooltip,
    Tag
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
            sorter: (a, b) => a.categoryId - b.categoryId,
            align: 'center'
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'categoryName',
            key: 'categoryName',
            sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
            align: 'left'
        },
        {
            title: 'ID danh mục cha',
            dataIndex: 'parentCategoryId',
            key: 'parentCategoryId',
            sorter: (a, b) =>
                (a.parentCategoryId || 0) - (b.parentCategoryId || 0),
            align: 'center'
        },
        {
            title: 'Thứ tự',
            dataIndex: 'sortOrder',
            key: 'sortOrder',
            sorter: (a, b) => a.sortOrder - b.sortOrder,
            align: 'center'
        },
        {
            title: 'Ghi chú',
            dataIndex: 'notes',
            key: 'notes',
            align: 'left'
        },
        {
            title: 'Kích hoạt',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (
                <Tag color={isActive ? 'green' : 'red'}>
                    {isActive ? 'Có' : 'Không'}
                </Tag>
            ),
            align: 'center'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdDate',
            key: 'createdDate',
            align: 'center'
        },
        {
            title: 'Ngày cập nhật',
            dataIndex: 'updatedDate',
            key: 'updatedDate',
            align: 'center'
        },
        {
            title: 'Hành động',
            key: 'actions',
            align: 'center',
            render: (_, record) => (
                <Space size='middle'>
                    <Tooltip title='Chỉnh sửa'>
                        <Button
                            icon={<EditOutlined />}
                            onClick={() => {
                                setEditingCategory(record);
                                form.setFieldsValue(record);
                                setIsModalVisible(true);
                            }}
                        />
                    </Tooltip>
                    <Tooltip title='Xóa'>
                        <Button
                            icon={<DeleteOutlined />}
                            onClick={() => handleDelete(record.categoryId)}
                            danger
                        />
                    </Tooltip>
                </Space>
            )
        }
    ];

    return (
        <Card title='Quản lý danh mục' bordered={false}>
            <Space
                style={{
                    marginBottom: 16,
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <Input.Search
                    placeholder='Tìm kiếm danh mục...'
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={handleSearch}
                    style={{ width: 300 }}
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
                bordered
            />
            <Modal
                title={editingCategory ? 'Chỉnh sửa danh mục' : 'Thêm danh mục'}
                open={isModalVisible}
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
        </Card>
    );
};

export default CategoryManager;
