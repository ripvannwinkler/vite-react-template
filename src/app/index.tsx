import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Demo } from './demo';
import { Layout } from './shared/layout';

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:lang/" element={<Layout />}>
					<Route index element={<Demo />} />
				</Route>
				<Route index element={<Navigate replace to="/en" />} />
			</Routes>
		</BrowserRouter>
	);
}
