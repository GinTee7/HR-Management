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
                taxName: 'VAT',
                taxRate: 10,
                isActive: true,
                description: 'Thuế giá trị gia tăng'
            }
        ];
        setTaxes(initialTaxes);
        setFilteredTaxes(initialTaxes);
    }, []);

    const handleAddOrEditTax = values => {
        if (editingTax) {
            const updatedTaxes = taxes.map(tax =>
                tax.taxId === editingTax.taxId
                    ? { ...editingTax, ...values }
                    : tax
            );
            setTaxes(updatedTaxes);
            setFilteredTaxes(updatedTaxes);
        } else {
            const newTax = {
                ...values,
                taxId: taxes.length + 1
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
        { title: 'ID', dataIndex: 'taxId', key: 'taxId', align: 'center' },
        {
            title: 'Tên thuế',
            dataIndex: 'taxName',
            key: 'taxName',
            align: 'left'
        },
        {
            title: 'Thuế suất (%)',
            dataIndex: 'taxRate',
            key: 'taxRate',
            align: 'center'
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
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            align: 'left'
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
            <Space
                style={{
                    marginBottom: 16,
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
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
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={handleAddOrEditTax}
                >
                    <Form.Item
                        name='taxName'
                        label='Tên thuế'
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
                        label='Thuế suất (%)'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập thuế suất!'
                            }
                        ]}
                    >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item name='description' label='Mô tả'>
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

export default TaxManager;
