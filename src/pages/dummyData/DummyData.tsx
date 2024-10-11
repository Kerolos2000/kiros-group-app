import { Grid2, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { EllipsisTypography, Loader, StyledForm } from 'src/components';

import dataJson from './data.json';

interface DummyData {
	email: string;
	jobTitle: string;
	name: string;
	phone: string;
	website: string;
}

export interface DummyDataProps {}

export const DummyData: React.FC<DummyDataProps> = () => {
	const { data, error, isLoading } = useQuery<DummyData[]>({
		queryFn: async () => {
			return new Promise<DummyData[]>(resolve => {
				setTimeout(() => {
					resolve(dataJson);
				}, 1000);
			});
		},
		queryKey: ['templateData'],
	});

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<EllipsisTypography>
				Error fetching data: {error.message}
			</EllipsisTypography>
		);
	}

	return (
		<Grid2
			container
			mt={2}
			spacing={2}
		>
			{data?.map(item => {
				const { email, jobTitle, name, phone, website } = item;
				return (
					<Grid2
						key={JSON.stringify(item)}
						size={{ md: 4, sm: 6, xs: 12 }}
					>
						<StyledForm>
							<Typography>Name: {name}</Typography>
							<Typography>Position: {jobTitle}</Typography>
							<Typography>Email: {email}</Typography>
							<Typography>Phone: {phone}</Typography>
							<Typography>Website: {website}</Typography>
						</StyledForm>
					</Grid2>
				);
			})}
		</Grid2>
	);
};
