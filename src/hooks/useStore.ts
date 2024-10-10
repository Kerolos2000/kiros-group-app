import { Mode } from 'src/constants';
import {
	BusinessCardFormTypes,
	GalleryFormTypes,
	LetterFormTypes,
} from 'src/pages';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
	mode: Mode;
	setMode: (mode: Mode) => void;
	businessCardData: BusinessCardFormTypes[];
	setBusinessCardData: (data: BusinessCardFormTypes) => void;
	galleryData: GalleryFormTypes[];
	setGalleryData: (data: GalleryFormTypes) => void;
	letterData: LetterFormTypes[];
	setLetterData: (data: LetterFormTypes) => void;
};

export const useStore = create<Store>()(
	persist(
		(set, get) => ({
			businessCardData: [],
			galleryData: [],
			letterData: [],
			mode: Mode.light,

			setBusinessCardData: (data: BusinessCardFormTypes) => {
				const existingData = get().businessCardData;

				set(() => ({
					businessCardData: existingData.some(item => item.id === data.id)
						? existingData.map(item => (item.id === data.id ? data : item))
						: [...existingData, data],
				}));
			},

			setGalleryData: (data: GalleryFormTypes) => {
				const existingData = get().galleryData;

				set(() => ({
					galleryData: existingData.some(item => item.id === data.id)
						? existingData.map(item => (item.id === data.id ? data : item))
						: [...existingData, data],
				}));
			},

			setLetterData: (data: LetterFormTypes) => {
				const existingData = get().letterData;

				set(() => ({
					letterData: existingData.some(item => item.id === data.id)
						? existingData.map(item => (item.id === data.id ? data : item))
						: [...existingData, data],
				}));
			},

			setMode: mode => set(() => ({ mode })),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
