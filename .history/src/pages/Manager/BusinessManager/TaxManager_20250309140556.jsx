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
    const [taxes, setTaxes] = useState([
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
    ]);

    const [filteredTaxes, setFilteredTaxes] = useState(taxes);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingTax, setEditingTax] = useState(null);
    const [form] = Form.useForm();

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

    const columns = [
        {
            title: 'ID',
            dataIndex: 'taxId',
            key: 'taxId',
            sorter: (a, b) => a.taxId - b.taxId
        },
        { title: 'Mã Thuế', dataIndex: 'taxCode', key: 'taxCode' },
        { title: 'Tên Thuế', dataIndex: 'taxName', key: 'taxName' },
        {
            title: 'Tỷ lệ (%)',
            dataIndex: 'taxRate',
            key: 'taxRate',
            sorter: (a, b) => a.taxRate - b.taxRate
        },
        { title: 'Mô tả', dataIndex: 'description', key: 'description' },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (isActive ? 'Hoạt động' : 'Không hoạt động')
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => (
                <Space size='middle'>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setEditingTax(record);
                            form.setFieldsValue(record);
                            setIsModalVisible(true);
                        }}
                    >
                        Sửa
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.taxId)}
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
            />
            <Modal
                title={editingTax ? 'Chỉnh sửa thuế' : 'Thêm thuế'}
                visible={isModalVisible}
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
                    <Form.Item name='description' label='Mô tả'>
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
        </div>
    );
};

export default TaxManager;
