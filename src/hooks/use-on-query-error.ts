import Toast from 'react-native-toast-message';
import i18n from 'src/translation';
import { useCallback } from 'react';
import { useLogout } from './use-logout';
import { AxiosError } from 'axios';

export const useOnQueryError = (dontShowErr?: boolean) => {
  const logout = useLogout();

  return useCallback(
    (error?: AxiosError<{ error?: { message?: string } }>) => {
      const cause = (error?.response?.data?.error?.message || '') + '';
      const text1 = cause ? cause : i18n.t('Network request failed');
      if (!dontShowErr) Toast.show({ type: 'fail', text1, visibilityTime: 7000 });
      if (cause.toLowerCase().includes('session expired')) logout();
      if (!error?.response) console.error(error);
      else console.error(error?.response?.status, error?.response?.data);
    },
    [dontShowErr, logout],
  );
};
