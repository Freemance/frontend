import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';

import { I18nextProvider } from 'react-i18next';
import { i18ne } from 'src/translation/i18n';
import i18next from 'i18next';

import { theme } from '@styles/theme';
import { useApolloClient } from 'src/lib/apollo/client';
import { GlobalProvider } from 'src/context';

function MyApp({ Component, pageProps }: AppProps) {
  i18ne();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <ApolloProvider client={useApolloClient()}>
        <GlobalProvider>
          <ThemeProvider theme={theme.lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </GlobalProvider>
      </ApolloProvider>
    </I18nextProvider>
  );
}

export default MyApp;
