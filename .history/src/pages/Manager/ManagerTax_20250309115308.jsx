import { useState } from 'react';
import { Table, Input, Button, Card, Space, Modal, Form, Switch } from 'antd';
import {
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const ManagerTax = () => {
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

export default ManagerTax;
