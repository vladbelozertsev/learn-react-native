import * as auth from 'src/libs/state/auth';
import { deleteToken } from 'src/libs/utils/keychain-token';
import { useCallback } from 'react';

export const useLogout = () => {
  const setUser = useAtom(auth.userAtom)[1];

  return useCallback(() => {
    deleteToken();
    setUser(null);
  }, [setUser]);
};
