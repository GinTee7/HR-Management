import { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const ManagerTax = () => {
    const [taxes, setTaxes] = useState([]);
    const [filteredTaxes, setFilteredTaxes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [form, setForm] = useState({
        taxId: 0,
        taxName: '',
        taxRate: 0,
        isActive: true,
        description: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const fetchTaxes = async () => {
        try {
            const res = await axios.get('/api/tax-config');
            setTaxes(res.data);
            setFilteredTaxes(res.data);
        } catch (error) {
            toast.error('Lỗi tải danh sách thuế!');
        }
    };

    useEffect(() => {
        fetchTaxes();
    }, []);

    const handleFilter = searchTerm => {
        if (searchTerm) {
            const filteredData = taxes.filter(tax =>
                tax.taxName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTaxes(filteredData);
        } else {
            setFilteredTaxes(taxes);
        }
    };

    const columns = [
        { title: 'ID', dataIndex: 'taxId', key: 'taxId' },
        { title: 'Tên Thuế', dataIndex: 'taxName', key: 'taxName' },
        { title: 'Thuế Suất', dataIndex: 'taxRate', key: 'taxRate' },
        {
            title: 'Trạng Thái',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => (isActive ? 'Active' : 'Inactive')
        },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true
        }
    ];

    return (
        <div className='p-6 bg-white rounded-lg shadow-lg'>
            <Toaster position='top-right' />
            <div className='flex justify-between mb-4'>
                <Input
                    placeholder='Tìm kiếm thuế...'
                    prefix={<SearchOutlined />}
                    onChange={e => {
                        setSearchText(e.target.value);
                        handleFilter(e.target.value);
                    }}
                />
            </div>
            <Table
                columns={columns}
                dataSource={filteredTaxes}
                rowKey='taxId'
                bordered
            />
        </div>
    );
};

export default ManagerTax;
