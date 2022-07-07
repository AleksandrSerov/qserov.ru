import React from 'react';
import { Button } from '@nextui-org/react';

import { Input } from '../components/input';

import styles from './index.module.css';

const Index: React.FC = () => (
	<div className={ styles.testClass }>
		<h1>Hello world</h1>
		<Input className='t' foo={ true } />
		<Button>Click me</Button>
	</div>
);

export default Index;

