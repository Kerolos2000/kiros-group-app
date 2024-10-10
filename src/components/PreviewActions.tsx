import { Button, Stack } from '@mui/material';
import { FieldValues } from 'react-hook-form';

interface PreviewActionsProps<T extends FieldValues> {
	onEdit?: (data: T) => void;
	onPreview: (data: T) => void;
	data: T;
}

export const PreviewActions = <T extends FieldValues>(
	props: PreviewActionsProps<T>,
) => {
	const { data, onEdit, onPreview } = props;

	return onEdit ? (
		<Stack
			direction='row'
			spacing={1}
		>
			<Button
				onClick={() => onEdit(data)}
				variant='contained'
			>
				Edit
			</Button>
			<Button
				onClick={() => onPreview(data)}
				variant='outlined'
			>
				Preview
			</Button>
		</Stack>
	) : null;
};
