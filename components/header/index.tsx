import React from 'react';
import { Grid } from '@nextui-org/react';

import styles from './index.module.css';
export const Header = () => (
	<div className={ styles.header }>
		<Grid.Container css={ {
			paddingLeft: '24px',
			paddingRight: '24px',
			height: '76px',
		} }
		alignItems='center'
		gap={ 1 }
		>
			<Grid xs={ 4 } >
				<div style={ {width: '52px', height: '52px', border: '1px dashed black'} } />
			</Grid>
			<Grid xs={ 6 }>
				<div style={ {width: '250px', height: '32px', marginLeft: 'auto', border: '1px dashed black'} }>Social</div>
			</Grid>
			<Grid xs={ 2 }>
				<div style={ {width: '32px', height: '32px', marginLeft: 'auto', border: '1px dashed black'} } />
			</Grid>
		</Grid.Container>
	</div>
);
