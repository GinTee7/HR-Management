import React, { useState } from 'react';
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
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const TaxManager = () => {
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingTax, setEditingTax] = useState(null);
    const [form] = Form.useForm();

    const initialData = [
        {
            taxId: 1,
            taxCode: 'VAT5',
            taxName: 'VAT 5%',
            taxRate: 5,
            description: 'Thuế GTGT 5%',
            isActive: true
        },
        {
            taxId: 2,
            taxCode: 'VAT10',
            taxName: 'VAT 10%',
            taxRate: 10,
            description: 'Thuế GTGT 10%',
            isActive: true
        },
        {
            taxId: 3,
            taxCode: 'EXC15',
            taxName: 'Thuế tiêu thụ đặc biệt',
            taxRate: 15,
            description: 'Thuế TTĐB 15%',
            isActive: false
        }
    ];

    const [taxes, setTaxes] = useState(initialData);
    const [filteredTaxes, setFilteredTaxes] = useState(initialData);

    const handleSearch = e => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        setFilteredTaxes(
            taxes.filter(tax =>
                Object.values(tax).some(val =>
                    val?.toString().toLowerCase().includes(value)
                )
            )
        );
    };

    const handleAddOrEditTax = values => {
        if (editingTax) {
            const updatedTaxes = taxes.map(tax =>
                tax.taxId === editingTax.taxId
                    ? { ...editingTax, ...values }
                    : tax
            );
            setTaxes(updatedTaxes);
            setFilteredTaxes(updatedTaxes);
            toast.success('Cập nhật thuế thành công!');
        } else {
            const newTax = { taxId: taxes.length + 1, ...values };
            const updatedTaxes = [...taxes, newTax];
            setTaxes(updatedTaxes);
            setFilteredTaxes(updatedTaxes);
            toast.success('Thêm thuế mới thành công!');
        }
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleDelete = taxId => {
        const updatedTaxes = taxes.filter(tax => tax.taxId !== taxId);
        setTaxes(updatedTaxes);
        setFilteredTaxes(updatedTaxes);
        toast.success('Xóa thuế thành công!');
    };

    const columns = [
        {
            title: 'Mã Thuế',
            dataIndex: 'taxCode',
            key: 'taxCode',
            sorter: (a, b) => a.taxCode.localeCompare(b.taxCode)
        },
        {
            title: 'Tên Thuế',
            dataIndex: 'taxName',
            key: 'taxName',
            sorter: (a, b) => a.taxName.localeCompare(b.taxName)
        },
        {
            title: 'Tỷ lệ (%)',
            dataIndex: 'taxRate',
            key: 'taxRate',
            align: 'center',
            sorter: (a, b) => a.taxRate - b.taxRate
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
            render: isActive => (
                <Tag color={isActive ? 'green' : 'red'}>
                    {isActive ? 'Hoạt động' : 'Không hoạt động'}
                </Tag>
            )
        },
        {
            title: 'Hành động',
            key: 'actions',
            align: 'center',
            render: (_, record) => (
                <Space>
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
                            danger
                            onClick={() => handleDelete(record.taxId)}
                        />
                    </Tooltip>
                </Space>
            )
        }
    ];

    return (
        <Card title='Quản lý thuế' bordered={false}>
            <Toaster position='top-right' />
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
                        ]}
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
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default TaxManager;
