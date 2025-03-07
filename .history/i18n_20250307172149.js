import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Login: 'Login',
                'Welcome Back': 'Welcome Back',
                Username: 'Username',
                Password: 'Password',
                Login: 'Login',
                'Forgot your password?': 'Forgot your password?',
                Show: 'Show',
                Hide: 'Hide',
                footer: {
                    description:
                        'Our products always create healthier, easier-to-grow plants, significantly increasing yields and profits for Vietnamese farmers.',
                    address:
                        'Headquarters: No. 98, Ap Dong Thanh, Thanh Dong A Commune, Tan Hiep, Kien Giang',
                    important_links: 'Important Links',
                    home: 'Home',
                    about_us: 'About Us',
                    products: 'Products',
                    login: 'Login',
                    product_categories: 'Product Categories',
                    fertilizer: 'Fertilizer',
                    pesticides: 'Pesticides',
                    disease_control: 'Disease Control',
                    plant_protection: 'Plant Protection',
                    management_system: 'Minh Long Management System'
                }
            }
        },
        vi: {
            translation: {
                Login: 'Đăng nhập',
                'Welcome Back': 'Chào mừng bạn trở lại',
                Username: 'Tên người dùng',
                Password: 'Mật khẩu',
                Login: 'Đăng nhập',
                'Forgot your password?': 'Bạn quên mật khẩu?',
                Show: 'Hiện',
                Hide: 'Ẩn',
                footer: {
                    description:
                        'Các sản phẩm của chúng tôi luôn tạo ra những cây khỏe mạnh hơn, dễ trồng, giúp tăng đáng kể năng suất và lợi nhuận cho người nông dân Việt Nam.',
                    address:
                        'Trụ sở chính: Số 98, Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang',
                    important_links: 'Liên kết quan trọng',
                    home: 'Trang chủ',
                    about_us: 'Giới thiệu',
                    products: 'Sản phẩm',
                    login: 'Đăng nhập',
                    product_categories: 'Các loại sản phẩm',
                    fertilizer: 'Phân bón',
                    pesticides: 'Thuốc trừ sâu',
                    disease_control: 'Thuốc trừ bệnh',
                    plant_protection: 'Thuốc bảo vệ thực vật',
                    management_system: 'Hệ thống quản lý Minh Long'
                }
            }
        }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
