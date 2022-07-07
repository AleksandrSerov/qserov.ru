import { FC } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<NextUIProvider>
		<Component { ...pageProps } />
	</NextUIProvider>
);

export default MyApp;
