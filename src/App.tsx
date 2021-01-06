import 'fonts.css';

import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import jssPreset from '@material-ui/styles/jssPreset';
// import { ConnectedRouter } from 'connected-react-router';
import flatten from 'flat';
import { create } from 'jss';
import rtl from 'jss-rtl';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

// import { history } from 'Helpers';
import Routes from 'Routes';
import { LocaleSelector } from 'Selectors';
import { getTheme } from 'Theme';
import { DefaultLanguage } from 'localization';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const { REACT_APP_NAME } = process.env;

const generateClassName = createGenerateClassName({
	productionPrefix: REACT_APP_NAME,
});

const App = () => {
	const { locale, messages } = useSelector(LocaleSelector);
	const { code, dir } = locale;

	const flatMessages: { [key: string]: string } = flatten(messages);

	return (
		<IntlProvider
			defaultLocale={DefaultLanguage.code}
			key={code}
			locale={code}
			messages={flatMessages}
		>
			<HelmetProvider>
				<ThemeProvider theme={getTheme(dir)}>
					<StylesProvider generateClassName={generateClassName} jss={jss}>
						{/* <ConnectedRouter history={history}> */}
						<Routes />
						{/* </ConnectedRouter> */}
					</StylesProvider>
				</ThemeProvider>
			</HelmetProvider>
		</IntlProvider>
	);
};

export default App;
