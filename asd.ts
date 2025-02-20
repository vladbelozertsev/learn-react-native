import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { ReactNativeFile } from './src/libs/utils/helpers';

function customIsExtractableFile(val: unknown): val is ReactNativeFile {
  const asd = val instanceof ReactNativeFile;
  console.log('----------------------');
  console.log('customIsExtractableFile', asd);
  console.log('----------------------');
  return asd;
}

export const uploadLink = createUploadLink({
  uri: 'http://10.0.2.2:3000/graphql',
  isExtractableFile: customIsExtractableFile,
  headers: {
    'content-type': 'multipart/form-data',
    'apollo-require-preflight': 'true',
  },
  // fetch: (uri, options) => {
  //   console.log(uri, options);
  //   return fetch(uri, {
  //     ...options,
  //     // mode: 'no-cors',
  //     headers: {
  //       // 'Content-Type': 'multipart/form-data',
  //       'Apollo-Require-Preflight': 'true', // https://stackoverflow.com/questions/74581070/apollo-client-this-operation-has-been-blocked-as-a-potential-cross-site-request
  //       ...options?.headers,

  //       lang: 'ru', // i18n.language,
  //     },
  //   });
  // },
});
