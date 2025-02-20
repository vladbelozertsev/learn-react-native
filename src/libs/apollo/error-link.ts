import Toast from 'react-native-toast-message';
import { onError } from '@apollo/client/link/error';

export const errorLink = onError(({ graphQLErrors, networkError, protocolErrors, operation }) => {
  console.log(operation.operationName);

  if (graphQLErrors) {
    // const msg = graphQLErrors.reduce((acc, err) => '`${acc}${err.extensions.originalError.message[0]}`', '');
    Toast.show({ text1: 'Request failed', type: 'fail' });
    console.log('graphQLErrors: ', graphQLErrors);
  }

  if (protocolErrors) {
    protocolErrors.forEach(({ message, extensions }) => {
      console.log(`[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`);
    });
  }

  if (networkError) {
    // if (networkError.message === 'Session expired') logout();
    Toast.show({ text1: networkError.message || 'Request failed', type: 'fail' });
    console.log('networkError: ', networkError);
  }
});
