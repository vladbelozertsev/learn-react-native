import './src/helpers/global';
import './src/translation';
import 'react-native-gesture-handler';
import React from 'react';
import { App } from './src/index';
import { AppRegistry } from 'react-native';
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { MyToast } from './src/components/my-toast';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { name as appName } from './app.json';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const AppProviders = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <App />
          <MyToast />
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppProviders);

/**
 * Useful links:
 * https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
 **/
