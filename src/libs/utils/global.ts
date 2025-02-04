import { useAtom } from 'jotai';

/**
 * @todo this file must be exported to the app root file (./index.js)
 **/

global.CLR_APP = '#EF6F3A';
global.CLR_APP_BG = 'rgba(252,186,3,0.1);';
global.useAtom = useAtom;

/**
 * Useful links:
 * about global vars in RN - https://stackoverflow.com/questions/35577551/how-to-use-global-variables-in-react-native
 * use global vars with TS - https://stackoverflow.com/questions/68481686/type-typeof-globalthis-has-no-index-signature
 **/
