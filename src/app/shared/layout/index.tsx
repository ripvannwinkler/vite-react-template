import { Outlet, useParams } from 'react-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Layout() {
	const { lang } = useParams();
	const { i18n, ready } = useTranslation();

	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [i18n, lang]);

	// istanbul ignore next
	if (!ready) {
		return null;
	}

	return (
		<div className="container" role="document" data-lang={i18n.language}>
			<Outlet />
		</div>
	);
}
