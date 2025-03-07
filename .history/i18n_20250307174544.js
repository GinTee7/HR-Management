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
                navbar: {
                    home: 'Home',
                    about_us: 'About Us',
                    products: 'Products',
                    language: 'Language',
                    english: 'English',
                    vietnamese: 'Vietnamese',
                    contact: 'Contact with us',
                    login: 'Login'
            },
                "contact": {
    "info_title": "Contact Information",
    "address": "No. 98, Ap Dong Thanh, Thanh Dong A Commune, Tan Hiep, Kien Giang",
    "working_hours": "Monday to Saturday: 7:30 AM - 5:00 PM",
    "form_title": "Send us your inquiry",
    "placeholder": {
      "name": "Your Name",
      "phone": "Your Phone Number",
      "email": "Your Email",
      "message": "Your Message"
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
                navbar: {
                    home: 'Trang chủ',
                    about_us: 'Về chúng tôi',
                    products: 'Sản phẩm',
                    language: 'Ngôn ngữ',
                    english: 'Tiếng Anh',
                    vietnamese: 'Tiếng Việt',
                    contact: 'Liên hệ',
                    login: 'Đăng Nhập'
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
