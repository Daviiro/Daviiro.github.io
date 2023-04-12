import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PtTranslations from "./locales/pt/common.json";
import EnTranslations from "./locales/en/common.json";

const resources = {
	pt: PtTranslations,
	en: EnTranslations,
};

i18n.use(initReactI18next).init({
	fallbackLng: "pt",
	resources,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
