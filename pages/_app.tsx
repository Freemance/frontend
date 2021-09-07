import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider } from '@apollo/client';

import { theme } from '@styles/theme';
import Client from 'src/lib/apollo/client';
import { GlobalProvider } from 'src/context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={Client}>
      <CookiesProvider>
        <GlobalProvider>
          <ThemeProvider theme={theme.lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </GlobalProvider>
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default MyApp;
