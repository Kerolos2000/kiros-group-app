import { useStore } from './useStore';

export const useChangeMode = () => {
	const { mode, setMode } = useStore();

	return { mode, setMode };
};
