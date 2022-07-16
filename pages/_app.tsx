import React, { FC } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<React.Fragment>
		<Script
			strategy='lazyOnload'
			src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` }
		/>

		<Script strategy='lazyOnload'>
			{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
		page_path: window.location.pathname,
		});
	`}
		</Script>
		<NextUIProvider>
			<Component { ...pageProps } />
		</NextUIProvider>
	</React.Fragment>

);

export default MyApp;
