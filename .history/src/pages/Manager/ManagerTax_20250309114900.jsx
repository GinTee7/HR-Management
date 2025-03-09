import { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const ManagerTax = () => {
    const [taxes, setTaxes] = useState([]);
    const [filteredTaxes, setFilteredTaxes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
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

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`/api/tax-config/${form.taxId}`, form);
            } else {
                await axios.post('/api/tax-config', form);
            }
            fetchTaxes();
            setOpen(false);
            setIsEditing(false);
            setForm({
                taxId: 0,
                taxName: '',
                taxRate: 0,
                isActive: true,
                description: ''
            });
        } catch (error) {
            toast.error('Lỗi khi lưu thuế!');
        }
    };

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
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogTitle>
                        {isEditing ? 'Chỉnh Sửa Thuế' : 'Thêm Mới Thuế'}
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <Input
                            placeholder='Tên Thuế'
                            value={form.taxName}
                            onChange={e =>
                                setForm({ ...form, taxName: e.target.value })
                            }
                            required
                        />
                        <Input
                            type='number'
                            placeholder='Thuế Suất'
                            value={form.taxRate}
                            onChange={e =>
                                setForm({ ...form, taxRate: e.target.value })
                            }
                            required
                        />
                        <Input
                            placeholder='Mô Tả'
                            value={form.description}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    description: e.target.value
                                })
                            }
                        />
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ManagerTax;
