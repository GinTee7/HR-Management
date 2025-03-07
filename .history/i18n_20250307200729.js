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
                },
                services: {
                    title: 'Products',
                    subtitle: 'Our Products',
                    description:
                        'Providing high-quality agricultural solutions.',
                    product_image: 'Product Image',
                    product_category: 'Herbicide',
                    add_to_cart: 'Add to Cart',
                    loading: 'Loading products...'
                },
                about: {
                    description:
                        'MINH LONG AGRO CO., LTD was built on the ambition of developing agriculture by people who have been attached to it for more than 30 years. Our products always meet strict quality standards, are recognized by regulatory agencies, and are trusted by farmers.',
                    team_image_alt: 'Our team image',
                    commitment_title: 'Our Commitment',
                    commitment_text:
                        'We are committed to providing high-quality agricultural solutions that bring economic benefits to farmers.',
                    cta_title: 'Join Us',
                    cta_text:
                        'Join us on our journey to bring value to the community.',
                    contact_button: 'Contact Us',
                    title: 'About Us',
                    read_more: 'See details'
                },
                footer: {
                    companyName: 'Minh Long',
                    companyDescription:
                        'Our products always create healthier plants, easier to grow, and significantly increase yields and profits for Vietnamese farmers.',
                    headquarters:
                        'Headquarters: No. 98, Dong Thanh Hamlet, Thanh Dong A Commune, Tan Hiep, Kien Giang',
                    phone: '1900 8982',
                    importantLinks: 'Important Links',
                    home: 'Home',
                    aboutUs: 'About Us',
                    products: 'Products',
                    login: 'Login',
                    productTypes: 'Product Categories',
                    fertilizer: 'Fertilizer',
                    pesticide: 'Pesticide',
                    fungicide: 'Fungicide',
                    plantProtection: 'Plant Protection',
                    copyright: '© 2025 || Minh Long Management System'
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
                },
                services: {
                    title: 'Sản phẩm',
                    subtitle: 'Sản phẩm của chúng tôi',
                    description:
                        'Cung cấp các giải pháp nông nghiệp chất lượng cao.',
                    product_image: 'Hình ảnh sản phẩm',
                    product_category: 'Thuốc trừ cỏ',
                    add_to_cart: 'Thêm vào giỏ hàng',
                    loading: 'Đang tải sản phẩm...'
                },
                about: {
                    description:
                        'CÔNG TY TNHH MINH LONG AGRO được xây dựng từ hoài bão phát triển nông nghiệp của những con người đã có hơn 30 năm gắn bó với nông nghiệp. Các sản phẩm do Công Ty Minh Long sản xuất và phân phối luôn đáp ứng các tiêu chí khắt khe về chất lượng, được các cơ quan quản lý công nhận, được người nông dân tin dùng.',
                    team_image_alt: 'Hình ảnh đội ngũ của chúng tôi',
                    commitment_title: 'Cam kết của chúng tôi',
                    commitment_text:
                        'Chúng tôi cam kết cung cấp các giải pháp nông nghiệp chất lượng cao, mang lại hiệu quả kinh tế cho nông dân.',
                    cta_title: 'Hãy Cùng Đồng Hành',
                    cta_text:
                        'Tham gia cùng chúng tôi trên hành trình mang lại giá trị cho cộng đồng.',
                    contact_button: 'Liên Hệ Ngay',
                    title: 'Về Minh Long',
                    read_more: 'Xem chi tiết'
                },
                footer: {
                    companyName: 'Minh Long',
                    companyDescription:
                        'Các sản phẩm của chúng tôi luôn tạo ra những cây khỏe mạnh hơn, dễ trồng, giúp tăng đáng kể năng suất và lợi nhuận cho người nông dân Việt Nam.',
                    headquarters:
                        'Trụ sở chính: Số 98, Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang',
                    phone: '1900 8982',
                    importantLinks: 'Liên kết quan trọng',
                    home: 'Trang chủ',
                    aboutUs: 'Giới thiệu',
                    products: 'Sản phẩm',
                    login: 'Đăng nhập',
                    productTypes: 'Các loại sản phẩm',
                    fertilizer: 'Phân bón',
                    pesticide: 'Thuốc trừ sâu',
                    fungicide: 'Thuốc trừ bệnh',
                    plantProtection: 'Thuốc bảo vệ thực vật',
                    copyright: '© 2025 || Hệ thống quản lý Minh Long'
                }
            }
        }
    },
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
