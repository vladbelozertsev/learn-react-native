import './src/__libs__/utils/global';
import './src/i18n';
import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { App } from 'navigation/index';
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider, from } from '@apollo/client';
import { MyToast } from '__libs__/components/my-toast';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cache, errorLink, httpLink } from '__libs__/apollo';
import { name as appName } from './app.json';
import { useLogout } from '__libs__/hooks/use-logout';

const AppProviders = () => {
  const logout = useLogout();

  const client = useMemo(() => {
    return new ApolloClient({
      cache: cache,
      link: from([errorLink(logout), httpLink]),
    });
  }, [logout]);

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
