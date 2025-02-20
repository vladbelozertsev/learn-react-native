import './src/libs/utils/global';
import './src/i18n';
import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { App } from 'src/app';
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider, from } from '@apollo/client';
import { MyToast } from 'src/libs/components/my-toast';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cache, errorLink, httpLink } from 'src/libs/apollo';
import { name as appName } from './app.json';
// import { useLogout } from 'src/libs/hooks/use-logout';
// import { uploadLink } from './asd';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding';
import { polyfill as polyfillReadableStream } from 'react-native-polyfill-globals/src/readable-stream';
import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';

polyfillReadableStream();
polyfillEncoding();
polyfillFetch();

const client = new ApolloClient({
  cache: cache,
  link: httpLink,
});

const AppProviders = () => {
  // const logout = useLogout();

  // const client = useMemo(() => {
  //   return new ApolloClient({
  //     cache: cache,
  //     link: from([uploadLink, errorLink(logout)]),
  //   });
  // }, [logout]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ApolloProvider client={client}>
          <App />
          <MyToast />
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppProviders);

/**
 * Useful links:
 * https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
 **/
