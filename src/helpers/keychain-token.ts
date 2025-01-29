import * as Keychain from 'react-native-keychain';

export const setToken = async (token: string) => {
  try {
    await Keychain.setInternetCredentials('TOKEN', 'USER', token);
  } catch (error) {
    console.error('Keychain setToken error', error);
  }
};

export const getToken = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials('TOKEN');
    return credentials && credentials.password;
  } catch (error) {
    console.error('Keychain getToken error', error);
  }
};

export const deleteToken = async () => {
  try {
    await Keychain.resetInternetCredentials('TOKEN');
  } catch (error) {
    console.error('Keychain deleteToken error', error);
  }
};

/**
 * Usefull links:
 * https://stackoverflow.com/questions/60352579/how-to-save-multiple-key-values-using-react-native-keychain
 **/
