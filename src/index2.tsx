import BootSplash from 'react-native-bootsplash';
import React, { useEffect, useState, FC } from 'react';
import { Loading } from './components/loading';
import { RootDrawer } from './navigation';
import { getKeychainLang } from './utils/keychain-language';
import { langAtom, userAtom } from './state/auth';
import { useGetUser } from './api/__api-old__/auth';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { changeLanguage } = useTranslation().i18n;
  const { mutateAsync } = useGetUser();
  const setLang = useAtom(langAtom)[1];
  const user = useAtom(userAtom)[0];
  const qc = useQueryClient();

  useEffect(() => {
    getKeychainLang().then(async lang => {
      if (!lang) return setIsLoading(false);
      await mutateAsync().catch(() => {});
      await changeLanguage(lang);
      setLang(lang);
      setIsLoading(false);
    });
  }, [changeLanguage, mutateAsync, setLang]);

  useEffect(() => {
    if (!isLoading) BootSplash.hide();
  }, [isLoading]);

  useEffect(() => {
    if (user === null) qc.removeQueries();
  }, [qc, user]);

  if (isLoading) return <Loading full />;
  return <RootDrawer />;
};

/**
 * Убрал из хука useOnQueryError, зависимость t,
 * т.к. при изменение языка через setI18nLang(...)
 * меняется и сама функция useTranslation.t., что
 * в свою очередь вызывает перерендер хука (см код)
 * для получения юзера
 **/
