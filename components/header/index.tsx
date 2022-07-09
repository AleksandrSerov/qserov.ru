import React from 'react';

import { Grid } from '../grid';

import styles from './index.module.css';
export const Header = () => (
	<div className={ styles.header }>
		<Grid.Row>
			<Grid.Col xs={ 4 }>
				<div style={ { width: '52px', height: '52px', border: '1px dashed black' } } />
			</Grid.Col>
			<Grid.Col xs={ 6 }>
				<div
					style={ {
						width: '250px',
						height: '32px',
						marginLeft: 'auto',
						border: '1px dashed black',
					} }
				/>
			</Grid.Col>
			<Grid.Col xs={ 2 }>
				<div
					style={ {
						width: '32px',
						height: '32px',
						marginLeft: 'auto',
						border: '1px dashed black',
					} }
				/>
			</Grid.Col>
		</Grid.Row>
	</div>
);
