import React from 'react';

import { Header } from '../components/header';

import styles from './index.module.css';

const Index: React.FC = () => (
	<React.Fragment>
		<Header />
		<h1 className={ styles.header }>Hello world!</h1>
	</React.Fragment>
);

export default Index;
