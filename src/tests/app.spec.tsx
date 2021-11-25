import { cleanup, render } from '@testing-library/react';
import { App } from 'app';
import { i18n } from '../../i18n';

beforeEach(i18n);
afterEach(cleanup);

describe('app', () => {
	it('should render layout', async () => {
		const { getByRole } = render(<App />);
		expect(getByRole('document')).toBeInTheDocument();
	});
});
