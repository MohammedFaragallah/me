import 'fonts.css';

import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import jssPreset from '@material-ui/styles/jssPreset';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { ConnectedRouter } from 'connected-react-router';
import flatten from 'flat';
import { history } from 'Helpers';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { DefaultLanguage } from 'localization';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import Routes from 'Routes';
import { LocaleSelector } from 'Selectors';
import { getTheme } from 'Theme';

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
					<StylesProvider jss={jss} generateClassName={generateClassName}>
						<ConnectedRouter history={history}>
							<Routes />
						</ConnectedRouter>
					</StylesProvider>
				</ThemeProvider>
			</HelmetProvider>
		</IntlProvider>
	);
};

export default App;