import * as Keychain from 'react-native-keychain';

export const setKeychainLang = async (language: string) => {
  try {
    await Keychain.setInternetCredentials('LANGUAGE', 'LANGUAGE', language);
  } catch (error) {
    console.error('Keychain setLanguage error', error);
  }
};

export const getKeychainLang = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials('LANGUAGE');
    return credentials && credentials.password;
  } catch (error) {
    console.error('Keychain getLanguage error', error);
  }
};

export const deleteKeychainLang = async () => {
  try {
    await Keychain.resetInternetCredentials('LANGUAGE');
  } catch (error) {
    console.error('Keychain deleteLanguage error', error);
  }
};
