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
                    vietnamese: 'Vietnamese'
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
                Hide: 'Ẩn'
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
