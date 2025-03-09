import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Table, Button, Input, Space, Modal, Form, Switch, Typography, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

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
            // Thêm các danh mục khác nếu cần
        ];
        setCategories(initialCategories);
        setFilteredCategories(initialCategories);
    }, []);

    const handleAddOrEditCategory = useCallback(
        (values) => {
            if (editingCategory) {
                const updatedCategories = categories.map((category) =>
                    category.categoryId === editingCategory.categoryId
                        ? { ...editingCategory, ...values }
                        : category
                );
                setCategories(updatedCategories);
                setFilteredCategories(updatedCategories);
                message.success('Đã cập nhật danh mục thành công!');
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
                message.success('Đã thêm danh mục mới thành công!');
            }
            setIsModalVisible(false);
            form.resetFields();
        },
        [categories, editingCategory, form]
    );

    const handleDelete = useCallback(
        (categoryId) => {
            const updatedCategories = categories.filter(
                (category) => category.categoryId !== categoryId
            );
            setCategories(updatedCategories);
            setFilteredCategories(updatedCategories);
            message.success('Đã xóa danh mục thành công!');
        },
        [categories]
    );

    const handleSearch = useCallback(
        (e) => {
            const { value } = e.target;
            setSearchText(value);
            const filteredData = categories.filter((category) =>
                Object.values(category).some(
                    (field) =>
                        field &&
                        field.toString().toLowerCase().includes(value.toLowerCase())
                )
            );
            setFilteredCategories(filteredData);
        },
        [categories]
    );

    const columns = useMemo(
        () => [
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
                sorter: (a, b) => (a.parentCategoryId || 0) - (b.parentCategoryId || 0)
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
                render: (isActive) => (isActive ? 'Có' : 'Không'),
                filters: [
                    { text: 'Có', value: true },
                    { text: 'Không', value: false }
                ],
                onFilter: (value, record) => record.isActive === value
            },
            { title: 'Người tạo', dataIndex: 'createdBy', key: 'createdBy' },
            { title: 'Ngày tạo', dataIndex: 'createdDate', key: 'createdDate' },
            { title: 'Người cập nhật', dataIndex: 'updatedBy', key: 'updatedBy' },
            { title: 'Ngày cập nhật', dataIndex: 'updatedDate', key: 'updatedDate' },
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

::contentReference[oaicite:3]{index=3}
 
