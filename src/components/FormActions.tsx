import { Button, Stack } from '@mui/material';
import {
	FieldValues,
	SubmitHandler,
	UseFormHandleSubmit,
} from 'react-hook-form';

export interface FormActionsProps<T extends FieldValues> {
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: SubmitHandler<T>;
	onSubmitAndSave: SubmitHandler<T>;
	state?: T;
}

export const FormActions = <T extends FieldValues>(
	props: FormActionsProps<T>,
) => {
	const { handleSubmit, onSubmit, onSubmitAndSave, state } = props;
	return (
		<Stack
			direction='row'
			spacing={1}
		>
			{state ? (
				<Button
					onClick={handleSubmit(onSubmitAndSave)}
					variant='outlined'
				>
					Edit
				</Button>
			) : (
				<>
					<Button
						onClick={handleSubmit(onSubmit)}
						variant='contained'
					>
						Submit
					</Button>
					<Button
						onClick={handleSubmit(onSubmitAndSave)}
						variant='outlined'
					>
						Submit and Save
					</Button>
				</>
			)}
		</Stack>
	);
};
