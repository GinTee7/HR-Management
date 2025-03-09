import React, { useState, memo } from 'react';
import Icon, {
    AppstoreOutlined,
    AuditOutlined,
    TeamOutlined,
    ProjectOutlined,
    LeftOutlined,
    RightOutlined,
    EditOutlined,
    LogoutOutlined,
    ShoppingCartOutlined,
    FileAddOutlined,
    FolderAddOutlined
} from '@ant-design/icons';
import { Menu, Modal, Input, Button } from 'antd';
import logo from '@assets/Avatar.jpg';
import { useNavigate } from 'react-router-dom';
import useViewport from '@hooks/useViewport';
import { useTranslation } from 'react-i18next';

const MenuNavigate_BusinessMana = ({ buttonClick }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;

    const [collapsed, setCollapsed] = useState(false);
    const [managerName, setManagerName] = useState('Minh Long Manager');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onClick = value => {
        if (value.key === 'vi' || value.key === 'en') {
            i18n.changeLanguage(value.key);
        } else if (value.key === 'logout') {
            navigate('/');
        } else {
            navigate('/business-manager/' + value.key);
        }
    };

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        if (buttonClick) buttonClick();
    };

    const handleEditClick = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const items = [
        {
            key: 'dashboard',
            label: t('Dashboard'),
            icon: <AppstoreOutlined />
        },
        {
            key: 'product-manager',
            label: t('Quản lý sản phẩm'),
            icon: <ShoppingCartOutlined />,
            children: [
                {
                    key: 'create-tax',
                    label: t('Tạo thuế'),
                    icon: <FileAddOutlined />
                },
                {
                    key: 'create-category',
                    label: t('Tạo Category'),
                    icon: <FolderAddOutlined />
                }
            ]
        },
        {
            key: 'debt-history',
            label: t('Lịch sử công nợ'),
            icon: <TeamOutlined />
        },
        {
            key: 'debt-report',
            label: t('Báo cáo công nợ'),
            icon: <ProjectOutlined />
        },
        {
            key: 'order-approval',
            label: t('Xét duyệt đơn hàng'),
            icon: <AuditOutlined />
        },
        {
            key: 'logout',
            label: (
                <div className='w-full pr-4 font-bold text-center text-red-500'>
                    <LogoutOutlined className='mr-2' /> {t('Logout')}
                </div>
            )
        }
    ];

    return (
        <div className='flex flex-col h-screen p-4 bg-gray-100 shadow-lg menu'>
            {!isMobile ? (
                <>
                    <div
                        className={`transition-all duration-300 ${
                            collapsed
                                ? 'hidden'
                                : 'flex flex-col items-center mb-4'
                        }`}
                    >
                        <div className='flex items-center gap-2'>
                            <p className='text-lg font-semibold text-gray-800 truncate'>
                                {managerName}
                            </p>
                            <EditOutlined
                                className='text-green-700 cursor-pointer'
                                onClick={handleEditClick}
                            />
                        </div>
                        <p className='text-sm text-gray-700'>Manager</p>
                        <img
                            src={logo}
                            alt='Logo'
                            className='object-cover w-16 h-16 rounded-full'
                        />
                    </div>
                    <Menu
                        onClick={onClick}
                        className='w-full'
                        mode='inline'
                        items={items}
                        inlineCollapsed={collapsed}
                    />
                    <div
                        onClick={toggleCollapsed}
                        className='p-2 text-center transition-all cursor-pointer hover:bg-gray-200'
                    >
                        {collapsed ? <RightOutlined /> : <LeftOutlined />}
                    </div>
                </>
            ) : (
                <Menu
                    onClick={onClick}
                    className='w-full'
                    mode='inline'
                    items={items}
                    inlineCollapsed
                />
            )}

            <Modal
                title={t('Chỉnh sửa tên')}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key='cancel'
                        onClick={handleCancel}
                        className='text-gray-800 bg-gray-300'
                    >
                        {t('Hủy')}
                    </Button>,
                    <Button
                        key='ok'
                        type='primary'
                        onClick={handleOk}
                        className='text-white bg-green-600'
                    >
                        {t('Lưu')}
                    </Button>
                ]}
            >
                <Input
                    value={managerName}
                    onChange={e => setManagerName(e.target.value)}
                    placeholder={t('Nhập tên mới')}
                />
            </Modal>
        </div>
    );
};

export default memo(MenuNavigate_BusinessMana);
