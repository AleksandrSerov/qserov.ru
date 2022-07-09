import React from 'react';

import { Header } from '../components/header';

import styles from './index.module.css';

const Index: React.FC = () => (
	<React.Fragment>
		<Header />
		<div>
			<h1 className={ styles.header }>Hello world!</h1>
		</div>
	</React.Fragment>
);

export default Index;
