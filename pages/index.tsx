import React from 'react';

import { Input } from '../components/input';

import styles from './index.module.css';

const Index: React.FC = () => (
	<div className={ styles.testClass }>
		<h1>Hello world</h1>
		<Input className='t' foo={ true } />
	</div>
);

export default Index;
