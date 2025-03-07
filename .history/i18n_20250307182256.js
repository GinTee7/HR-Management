import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                login: 'Login',
                welcome_back: 'Welcome Back',
                username: 'Username',
                password: 'Password',
                forgot_password: 'Forgot your password?',
                show: 'Show',
                hide: 'Hide',
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
                contact: {
                    info_title: 'Contact Information',
                    address:
                        '98, Đông Thành Hamlet, Thạnh Đông A Commune, Tân Hiệp, Kiên Giang',
                    working_hours: 'Monday to Saturday: 7:30 AM to 5:00 PM',
                    phone: 'Phone',
                    email: 'Email',
                    form_title: 'Send us your inquiry',
                    placeholder_name: 'Your Name',
                    placeholder_phone: 'Your Phone Number',
                    placeholder_email: 'Your Email',
                    placeholder_message: 'Message',
                    submit_button: 'SEND TO US',
                    required: 'This field is required',
                    invalid_email: 'Invalid email address',
                    invalid_phone:
                        'Invalid phone number (must be at least 10 digits)',
                    success_message: 'Information sent successfully!'
                }
            }
        },
        vi: {
            translation: {
                login: 'Đăng nhập',
                welcome_back: 'Chào mừng bạn trở lại',
                username: 'Tên người dùng',
                password: 'Mật khẩu',
                forgot_password: 'Bạn quên mật khẩu?',
                show: 'Hiện',
                hide: 'Ẩn',
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
                contact: {
                    info_title: 'Thông tin liên hệ',
                    address:
                        'Số 98, Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang',
                    working_hours: 'Thứ 2 đến Thứ 7: 7h30 đến 17h',
                    phone: 'Số điện thoại',
                    email: 'Email',
                    form_title: 'Gửi thắc mắc cho chúng tôi',
                    placeholder_name: 'Tên của bạn',
                    placeholder_phone: 'Số điện thoại của bạn',
                    placeholder_email: 'Email của bạn',
                    placeholder_message: 'Nội dung',
                    submit_button: 'GỬI CHO CHÚNG TÔI',
                    required: 'Trường này là bắt buộc',
                    invalid_email: 'Email không hợp lệ',
                    invalid_phone: 'Số điện thoại không hợp lệ (ít nhất 10 số)',
                    success_message: 'Gửi thông tin thành công!'
                }
            }
        }
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Nếu không tìm thấy key, dùng tiếng Anh
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
