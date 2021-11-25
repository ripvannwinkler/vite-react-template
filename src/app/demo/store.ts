import create from 'zustand';

export interface DemoState {
	isDemo: boolean;
	toggle: () => void;
}

export const useDemo = create<DemoState>((set) => ({
	isDemo: false,
	toggle: () => {
		set((state) => ({
			isDemo: !state.isDemo,
		}));
	},
}));
