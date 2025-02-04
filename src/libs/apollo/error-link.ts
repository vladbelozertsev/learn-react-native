import Toast from 'react-native-toast-message';
import { onError } from '@apollo/client/link/error';

export const errorLink = (logout: () => void) => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const msg = graphQLErrors.reduce((acc, err) => `${acc}${err.message}`, '');
      Toast.show({ text1: msg || 'Request failed', type: 'fail' });
      console.log(graphQLErrors);
    }

    if (networkError) {
      if (networkError.message === 'Session expired') logout();
      Toast.show({ text1: networkError.message || 'Request failed', type: 'fail' });
      console.log(networkError);
    }
  });
};
