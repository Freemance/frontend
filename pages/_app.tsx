import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';

import { theme } from '@styles/theme';
import Client from 'src/lib/apollo/client';
import { GlobalProvider } from 'src/context';

// Internacionalizacion
import { I18nextProvider } from 'react-i18next';
import { i18ne } from 'src/translation/i18n';
import i18next from 'i18next';
function MyApp({ Component, pageProps }: AppProps) {
  i18ne();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={Client}>
      <GlobalProvider>
        <ThemeProvider theme={theme.lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalProvider>
    </ApolloProvider>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme.lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default MyApp;
