import { Mode } from 'src/constants';
import {
	BusinessCardFormInputs,
	GalleryFormInputs,
	LetterFormInputs,
} from 'src/pages';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
	mode: Mode;
	setMode: (mode: Mode) => void;
	businessCardData: BusinessCardFormInputs[];
	setBusinessCardData: (data: BusinessCardFormInputs) => void;
	galleryData: GalleryFormInputs[];
	setGalleryData: (data: GalleryFormInputs) => void;
	letterData: LetterFormInputs[];
	setLetterData: (data: LetterFormInputs) => void;
};

export const useStore = create<Store>()(
	persist(
		set => ({
			businessCardData: [],
			galleryData: [],
			letterData: [],
			mode: Mode.light,
			setBusinessCardData: data =>
				set(state => ({ businessCardData: [...state.businessCardData, data] })),
			setGalleryData: data =>
				set(state => ({ galleryData: [...state.galleryData, data] })),
			setLetterData: data =>
				set(state => ({ letterData: [...state.letterData, data] })),
			setMode: mode => set(() => ({ mode })),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
