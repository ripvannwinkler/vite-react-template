import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { Layout } from 'app/shared/layout';
import { i18n } from '../../../i18n';

import config from 'app/config';

beforeAll(i18n);
afterEach(cleanup);

describe('layout', () => {
	it('should change render language based on route param', async () => {
		for (const lang of config.supportedLanguages) {
			cleanup();
			const { getByRole } = render(
				<MemoryRouter initialEntries={[`/${lang}`]}>
					<Routes>
						<Route path=":lang" element={<Layout />} />
					</Routes>
				</MemoryRouter>,
			);

			const doc = getByRole('document');
			expect(doc).toHaveAttribute('data-lang', lang);
		}
	});
});
