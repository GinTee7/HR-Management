import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome Back": "Welcome Back",
        Username: "Username",
        Password: "Password",
        Login: "Login",
        "Forgot your password?": "Forgot your password?",
        Show: "Show",
        Hide: "Hide",
      },
    },
    vi: {
      translation: {
        "Welcome Back": "Chào mừng bạn trở lại",
        Username: "Tên người dùng",
        Password: "Mật khẩu",
        Login: "Đăng nhập",
        "Forgot your password?": "Bạn quên mật khẩu?",
        Show: "Hiện",
        Hide: "Ẩn",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
