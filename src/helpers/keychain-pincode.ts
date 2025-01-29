import * as Keychain from 'react-native-keychain';

export const PINCODE_LENGTH = 6;
export const PINCODE_MAX_ATTEMPTS = 5;
export const REMOVE_PINCODE_SYMBOL = 'REMOVE_PINCODE_SYMBOL';

const PINCODE = 'PINCODE';
const PINCODE_ATTEMPTS = 'PINCODE_ATTEMPTS';

export const setPincode = async (userId: string, pincode: string) => {
  try {
    return await Keychain.setInternetCredentials(PINCODE, userId, pincode);
  } catch (error) {
    console.error('Keychain setPincode error', error);
    return { error: true, errorMessage: error };
  }
};

export const getPincode = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials(PINCODE);
    return { pincode: credentials && credentials.password, error: false };
  } catch (error) {
    console.error('Keychain getPincode error', error);
    return { error: true, errorMessage: error };
  }
};

export const deletePincode = async () => {
  try {
    return await Keychain.resetInternetCredentials(PINCODE);
  } catch (error) {
    console.error('Keychain deletePincode error', error);
    return { error: true, errorMessage: error };
  }
};

export const setPincodeAttempts = async (userId: string, attempts: string) => {
  try {
    return await Keychain.setInternetCredentials(PINCODE_ATTEMPTS, userId, attempts);
  } catch (error) {
    console.error('Keychain setPincodeAttempts error', error);
    return { error: true, errorMessage: error };
  }
};

export const getPincodeAttempts = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials(PINCODE_ATTEMPTS);
    return { attempts: credentials && credentials.password, error: false };
  } catch (error) {
    console.error('Keychain getPincodeAttempts error', error);
    return { error: true, errorMessage: error };
  }
};

export const deletePincodeAttempts = async () => {
  try {
    return await Keychain.resetInternetCredentials(PINCODE_ATTEMPTS);
  } catch (error) {
    console.error('Keychain deletePincodeAttempts error', error);
    return { error: true, errorMessage: error };
  }
};
