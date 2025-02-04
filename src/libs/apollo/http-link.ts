import i18n from 'i18next';
import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
  uri: 'http://10.0.2.2:3000/graphql',
  fetch: (uri, options) => {
    const lang = `lang=${i18n.language}`;
    return fetch(`${uri}?${lang}`, options);
  },
});

/**
 * Useful links:
 * https://stackoverflow.com/questions/58863404/passing-query-parameters-to-react-apollo-post-requests
 **/
