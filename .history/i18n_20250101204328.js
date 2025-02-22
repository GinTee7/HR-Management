import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Login: "Login",
        English: "English",
        "Tiếng Việt": "Vietnamese",
      },
    },
    vi: {
      translation: {
        Login: "Đăng nhập",
        English: "Tiếng Anh",
        "Tiếng Việt": "Tiếng Việt",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
