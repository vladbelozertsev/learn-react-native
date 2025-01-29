import axios from 'axios';
import i18n from 'src/translation';
import { GUEST_TOKEN, URLS } from './env';
import { getToken } from './keychain-token';
import { isObj, params } from './helpers';

/**
 * @todo this file must be exported to the app root file (./index.js)
 **/

global.CLR_APP = '#EF6F3A';
global.CLR_APP_BG = 'rgba(252,186,3,0.1);';
global.axios = axios;

axios.defaults.baseURL = URLS.API;
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.interceptors.request.use(async config => {
  const url = `${config.url}${params(config.params)}`;
  const symbol = url?.indexOf('?') === -1 ? '?' : '&';
  config.url = `${url}${symbol}language=${i18n.language}`;
  config.headers.Authorization = (await getToken()) || GUEST_TOKEN;
  config.headers['Content-Type'] = 'multipart/form-data';
  if (!config.data || typeof config.data !== 'object') return config;
  const arr = Object.entries(config.data);
  const formData = new FormData();
  for (const item of arr) formData.append(item[0], isObj(item[1]) ? JSON.stringify(item[1]) : item[1]);
  config.data = formData;
  return config;
});

/**
 * Useful links:
 * about global vars in RN - https://stackoverflow.com/questions/35577551/how-to-use-global-variables-in-react-native
 * use global vars with TS - https://stackoverflow.com/questions/68481686/type-typeof-globalthis-has-no-index-signature
 **/
