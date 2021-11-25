import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './src/public/locales/en/translation.json';
import es from './src/public/locales/es/translation.json';

export const supportedLngs = ['en', 'es'];
export const fallbackLng = 'en';

function init(lang = fallbackLng) {
	i18n.use(initReactI18next).init({
		lng: lang,
		fallbackLng,
		debug: false,
		supportedLngs,
		nsSeparator: false,
		keySeparator: false,
		resources: {
			en: { translation: en },
			es: { translation: es },
		},
		react: {
			useSuspense: false,
		},
		interpolation: {
			escapeValue: false,
		},
	});
}

export default i18n;
export { init as i18n };
