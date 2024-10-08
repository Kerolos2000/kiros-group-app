import { Mode } from 'src/constants';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
	mode: Mode;
	setMode: (mode: Mode) => void;
};

export const useStore = create<Store>()(
	persist(
		set => ({
			mode: Mode.light,
			setMode: mode => set(() => ({ mode })),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
