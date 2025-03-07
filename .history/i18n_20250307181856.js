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
                contactInfo: 'Contact Information',
                address:
                    '98, Đông Thành Hamlet, Thạnh Đông A Commune, Tân Hiệp, Kiên Giang',
                workingHours: 'Monday to Saturday: 7:30 AM to 5:00 PM',
                phone: 'Phone',
                email: 'Email',
                contactUs: 'Send us your inquiry',
                namePlaceholder: 'Your Name',
                phonePlaceholder: 'Your Phone Number',
                emailPlaceholder: 'Your Email',
                messagePlaceholder: 'Message',
                submitButton: 'SEND TO US',
                required: 'This field is required',
                invalidEmail: 'Invalid email address',
                invalidPhone:
                    'Invalid phone number (must be at least 10 digits)',
                successMessage: 'Information sent successfully!'
            }
        },
        vi: {
            translation: {
                Login: 'Đăng nhập',
                'Welcome Back': 'Chào mừng bạn trở lại',
                Username: 'Tên người dùng',
                Password: 'Mật khẩu',
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
                },
                contactInfo: 'Thông tin liên hệ',
                address:
                    'Số 98, Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang',
                workingHours: 'Thứ 2 đến Thứ 7: 7h30 đến 17h',
                phone: 'Số điện thoại',
                email: 'Email',
                contactUs: 'Gửi thắc mắc cho chúng tôi',
                namePlaceholder: 'Tên của bạn',
                phonePlaceholder: 'Số điện thoại của bạn',
                emailPlaceholder: 'Email của bạn',
                messagePlaceholder: 'Nội dung',
                submitButton: 'GỬI CHO CHÚNG TÔI',
                required: 'Trường này là bắt buộc',
                invalidEmail: 'Email không hợp lệ',
                invalidPhone: 'Số điện thoại không hợp lệ (ít nhất 10 số)',
                successMessage: 'Gửi thông tin thành công!'
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
