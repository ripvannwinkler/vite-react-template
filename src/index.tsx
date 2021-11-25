/* istanbul ignore file */

import 'styles/index.scss';
import { App } from 'app';
import { StrictMode } from 'react';
import { i18n } from '../i18n';
import { render } from 'react-dom';

i18n();
render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root'),
);
