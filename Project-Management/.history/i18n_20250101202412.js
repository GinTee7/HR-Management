import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {"login": "Login",
    "usernamePlaceholder": "Username",
    "passwordPlaceholder": "Password",
    "forgotPassword":"Forgot your password?",
    "Welcome": "Welcome Back"
}},
      },
      vi: {
        translation: {
          login: "Đăng nhập",
          usernamePlaceholder: "Tên người dùng",
          passwordPlaceholder: "Mật khẩu",
          forgotPassword: "Bạn quên mật khẩu?",
          Welcome: "Chào mừng bạn đến",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;