import { cleanup, fireEvent, render } from '@testing-library/react';

import { Demo } from 'app/demo';
import { i18n } from '../../../../i18n';

beforeAll(i18n);
afterEach(cleanup);

describe('demo store', () => {
	it('should toggle demo mode', async () => {
		const { getByTestId } = render(<Demo />);
		const button = getByTestId('button');
		const label = getByTestId('demo');

		fireEvent.click(button);
		expect(label.textContent).toBe('Demo mode: yes');

		fireEvent.click(button);
		expect(label.textContent).toBe('Demo mode: no');
	});
});
