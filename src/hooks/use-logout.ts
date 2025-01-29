import * as auth from 'src/state/auth';
import { deletePincode, deletePincodeAttempts } from 'src/utils/keychain-pincode';
import { deleteToken } from 'src/utils/keychain-token';
import { useCallback } from 'react';

export const useLogout = () => {
  const setIsPincode = auth.useStateIsPincode()[1];
  const setUser = auth.useStateSetUser();

  return useCallback(() => {
    deleteToken();
    deletePincode();
    deletePincodeAttempts();
    setIsPincode(false);
    setUser(undefined);
  }, [setIsPincode, setUser]);
};
