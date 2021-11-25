import { useDemo } from 'app/store';
import { useTranslation } from 'react-i18next';

export function Demo() {
	const demo = useDemo();
	const { t } = useTranslation();

	function handleClick() {
		demo.toggle();
	}

	return (
		<div className="bg-white">
			<h1 data-testid="demo">
				{t('Demo mode:')} {demo.isDemo ? 'yes' : 'no'}
			</h1>
			<button data-testid="button" onClick={handleClick}>
				Toggle
			</button>
		</div>
	);
}
