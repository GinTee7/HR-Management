import React, { useState, memo, useCallback } from 'react';
import {
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
    FolderAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu, Modal, Input, Button, Table } from 'antd';
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

    const onClick = useCallback(
        value => {
            if (value.key === 'vi' || value.key === 'en') {
                i18n.changeLanguage(value.key);
            } else if (value.key === 'logout') {
                navigate('/');
            } else {
                navigate(`/business-manager/${value.key}`);
            }
        },
        [i18n, navigate]
    );

    const toggleCollapsed = useCallback(() => {
        setCollapsed(prev => !prev);
        buttonClick?.();
    }, [buttonClick]);

    const handleEditClick = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);

    const items = [
        {
            key: 'dashboard',
            label: t('Dashboard'),
            icon: <AppstoreOutlined />
        },
        {
            key: 'profile',
            label: t('Profile'),
            icon: <UserOutlined />
        },
        {
            key: 'product-manager',
            label: t('Quản lý sản phẩm'),
            icon: <ShoppingCartOutlined />,
            children: [
                {
                    key: 'product-manager',
                    label: t('Quản lý sản phẩm'),
                    icon: <FileAddOutlined />
                },
                {
                    key: 'tax-manager',
                    label: t('Quản lý thuế'),
                    icon: <FileAddOutlined />
                },
                {
                    key: 'category-manager',
                    label: t('Quản lý Category'),
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
                <div className='w-full pr-4 font-bold text-center text-red-600'>
                    <LogoutOutlined className='mr-2' /> {t('Logout')}
                </div>
            )
        }
    ];

    return (
        <div className='flex flex-col items-center h-screen p-4 bg-gray-100 shadow-lg menu'>
            <img
                src={logo}
                alt='Logo'
                className='w-16 h-16 mb-4 logo-amazing'
            />
            <Menu
                onClick={onClick}
                className={`w-full transition-all duration-300 ${
                    collapsed ? 'w-20' : 'w-64'
                }`}
                mode='inline'
                items={items}
                inlineCollapsed={collapsed}
            />
            <div
                onClick={toggleCollapsed}
                className='flex items-center justify-center mt-4 cursor-pointer button-collapsed'
            >
                {collapsed ? <RightOutlined /> : <LeftOutlined />}
            </div>

            <Modal
                title={t('Chỉnh sửa tên')}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key='cancel' onClick={handleCancel}>
                        {t('Hủy')}
                    </Button>,
                    <Button
                        key='ok'
                        type='primary'
                        onClick={handleOk}
                        className='bg-gray-400 text-[#31473A]'
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
