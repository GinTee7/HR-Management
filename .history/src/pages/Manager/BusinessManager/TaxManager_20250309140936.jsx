import { useState } from 'react';
import { Table, Input, Button, Card, Space, Modal, Form, Switch } from 'antd';
import {
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const TaxManager = () => {
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const sampleData = [
        {
            taxId: 1,
            taxCode: 'VAT5',
            taxName: 'VAT 5%',
            taxRate: 5,
            description: 'Thuế giá trị gia tăng 5%',
            isActive: true
        },
        {
            taxId: 2,
            taxCode: 'VAT10',
            taxName: 'VAT 10%',
            taxRate: 10,
            description: 'Thuế giá trị gia tăng 10%',
            isActive: true
        },
        {
            taxId: 3,
            taxCode: 'EXC15',
            taxName: 'Thuế tiêu thụ đặc biệt',
            taxRate: 15,
            description: 'Thuế tiêu thụ đặc biệt 15%',
            isActive: false
        }
    ];

    const [filteredTaxes, setFilteredTaxes] = useState(sampleData);

    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = sampleData.filter(
                tax =>
                    tax.taxName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    tax.taxCode.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTaxes(filteredData);
        } else {
            setFilteredTaxes(sampleData);
        }
    };

    const handleAddTax = () => {
        form.validateFields().then(values => {
            const newTax = { taxId: filteredTaxes.length + 1, ...values };
            setFilteredTaxes([...filteredTaxes, newTax]);
            setIsModalVisible(false);
            form.resetFields();
            toast.success('Thêm thuế thành công!');
        });
    };

    const columns = [
        { title: 'Mã Thuế', dataIndex: 'taxCode', key: 'taxCode', width: 150 },
        { title: 'Tên Thuế', dataIndex: 'taxName', key: 'taxName', width: 200 },
        {
            title: 'Tỷ lệ (%)',
            dataIndex: 'taxRate',
            key: 'taxRate',
            align: 'center',
            width: 100
        },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            key: 'isActive',
            align: 'center',
            width: 120,
            render: isActive => (isActive ? 'Hoạt động' : 'Không hoạt động')
        },
        {
            title: 'Thao tác',
            key: 'actions',
            align: 'center',
            width: 180,
            render: (_, record) => (
                <Space>
                    <Button type='primary' icon={<EditOutlined />} size='small'>
                        Sửa
                    </Button>
                    <Button
                        type='danger'
                        icon={<DeleteOutlined />}
                        size='small'
                    >
                        Xóa
                    </Button>
                </Space>
            )
        }
    ];

    return (
        <Card className='p-5 overflow-auto bg-white rounded-lg shadow-lg'>
            <Toaster position='top-right' />

            <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
                <Input
                    placeholder='Tìm kiếm thuế...'
                    prefix={<SearchOutlined />}
                    onChange={e => {
                        setSearchText(e.target.value);
                        handleFilter(e.target.value);
                    }}
                    className='w-full md:w-1/2'
                />
                <Button
                    type='primary'
                    icon={<PlusOutlined />}
                    onClick={() => setIsModalVisible(true)}
                >
                    Thêm mới
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredTaxes}
                rowKey='taxId'
                bordered
                pagination={{ pageSize: 5 }}
                scroll={{ x: 'max-content' }}
            />

            <Modal
                title='Thêm thuế mới'
                visible={isModalVisible}
                onOk={handleAddTax}
                onCancel={() => setIsModalVisible(false)}
                okText='Lưu'
                cancelText='Hủy'
            >
                <Form form={form} layout='vertical'>
                    <Form.Item
                        name='taxCode'
                        label='Mã Thuế'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mã thuế!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='taxName'
                        label='Tên Thuế'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên thuế!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='taxRate'
                        label='Tỷ lệ (%)'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tỷ lệ thuế!'
                            }
                        ]}import React, { useState, useEffect } from 'react';
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

const TaxManager = () => {
    const [taxes, setTaxes] = useState([]);
    const [filteredTaxes, setFilteredTaxes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingTax, setEditingTax] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const initialTaxes = [
            {
                taxId: 1,
                taxCode: 'VAT5',
                taxName: 'VAT 5%',
                taxRate: 5,
                description: 'Thuế giá trị gia tăng 5%',
                isActive: true,
            },
            {
                taxId: 2,
                taxCode: 'VAT10',
                taxName: 'VAT 10%',
                taxRate: 10,
                description: 'Thuế giá trị gia tăng 10%',
                isActive: true,
            },
        ];
        setTaxes(initialTaxes);
        setFilteredTaxes(initialTaxes);
    }, []);

    const handleAddOrEditTax = values => {
        if (editingTax) {
            const updatedTaxes = taxes.map(tax =>
                tax.taxId === editingTax.taxId ? { ...editingTax, ...values } : tax
            );
            setTaxes(updatedTaxes);
            setFilteredTaxes(updatedTaxes);
        } else {
            const newTax = {
                ...values,
                taxId: taxes.length + 1,
            };
            const updatedTaxes = [...taxes, newTax];
            setTaxes(updatedTaxes);
            setFilteredTaxes(updatedTaxes);
        }
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleDelete = taxId => {
        const updatedTaxes = taxes.filter(tax => tax.taxId !== taxId);
        setTaxes(updatedTaxes);
        setFilteredTaxes(updatedTaxes);
    };

    const handleSearch = e => {
        const { value } = e.target;
        setSearchText(value);
        const filteredData = taxes.filter(tax =>
            Object.values(tax).some(
                field =>
                    field &&
                    field.toString().toLowerCase().includes(value.toLowerCase())
            )
        );
        setFilteredTaxes(filteredData);
    };

    const columns = [
        { title: 'ID', dataIndex: 'taxId', key: 'taxId', sorter: (a, b) => a.taxId - b.taxId, align: 'center' },
        { title: 'Mã Thuế', dataIndex: 'taxCode', key: 'taxCode', align: 'left' },
        { title: 'Tên Thuế', dataIndex: 'taxName', key: 'taxName', align: 'left' },
        { title: 'Tỷ lệ (%)', dataIndex: 'taxRate', key: 'taxRate', sorter: (a, b) => a.taxRate - b.taxRate, align: 'center' },
        { title: 'Mô tả', dataIndex: 'description', key: 'description', align: 'left' },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (
                <Tag color={isActive ? 'green' : 'red'}>
                    {isActive ? 'Hoạt động' : 'Không hoạt động'}
                </Tag>
            ),
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
                                setEditingTax(record);
                                form.setFieldsValue(record);
                                setIsModalVisible(true);
                            }}
                        />
                    </Tooltip>
                    <Tooltip title='Xóa'>
                        <Button
                            icon={<DeleteOutlined />}
                            onClick={() => handleDelete(record.taxId)}
                            danger
                        />
                    </Tooltip>
                </Space>
            )
        }
    ];

    return (
        <Card title='Quản lý thuế' bordered={false}>
            <Space style={{ marginBottom: 16, width: '100%', justifyContent: 'space-between' }}>
                <Input.Search
                    placeholder='Tìm kiếm thuế...'
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={handleSearch}
                    style={{ width: 300 }}
                />
                <Button
                    type='primary'
                    icon={<PlusOutlined />}
                    onClick={() => {
                        setEditingTax(null);
                        form.resetFields();
                        setIsModalVisible(true);
                    }}
                >
                    Thêm thuế
                </Button>
            </Space>
            <Table
                columns={columns}
                dataSource={filteredTaxes}
                rowKey='taxId'
                pagination={{ pageSize: 5 }}
                bordered
            />
            <Modal
                title={editingTax ? 'Chỉnh sửa thuế' : 'Thêm thuế'}
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => form.submit()}
            >
                <Form form={form} layout='vertical' onFinish={handleAddOrEditTax}>
                    <Form.Item name='taxCode' label='Mã Thuế' rules={[{ required: true, message: 'Vui lòng nhập mã thuế!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='taxName' label='Tên Thuế' rules={[{ required: true, message: 'Vui lòng nhập tên thuế!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='taxRate' label='Tỷ lệ (%)' rules={[{ required: true, message: 'Vui lòng nhập tỷ lệ thuế!' }]}>
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item name='description' label='Mô tả'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name='isActive' label='Trạng thái' valuePropName='checked'>
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default TaxManager;

                    >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item name='description' label='Mô Tả'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name='isActive'
                        label='Trạng thái'
                        valuePropName='checked'
                    >
                        <Switch
                            checkedChildren='Hoạt động'
                            unCheckedChildren='Không hoạt động'
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default TaxManager;
