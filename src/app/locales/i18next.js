import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en/translation.json";
import translationRu from "./ru/translation.json";
import translationKy from "./ky/translation.json";

i18n.use(initReactI18next).init({
    lng: "Рус",
    debug: true,
    resources: {
        Анг: { translation: translationEn },
        Рус: { translation: translationRu },
        Кыр: { translation: translationKy },
    },
});

export default i18n; 
