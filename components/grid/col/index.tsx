import { FC, ReactNode } from 'react';
import type { GridProps } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';

export type ColProps = GridProps & {
	children: ReactNode;
};
export const Col: FC<ColProps> = ({ children, ...restProps }) => (
	<Grid { ...restProps }>{children}</Grid>
);
