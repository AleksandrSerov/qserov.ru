import { FC, ReactNode } from 'react';
import { Grid } from '@nextui-org/react';

export type RowProps = {
	children: ReactNode;
};

export const Row: FC<RowProps> = ({ children }) => (
	<Grid.Container
		css={ {
			paddingLeft: '24px',
			paddingRight: '24px',
			height: '76px',
		} }
		alignItems='center'
	>
		{children}
	</Grid.Container>
);
