import React, { FC } from 'react';
import { TFunction, i18n as Ii18n } from 'i18next';
import { useTranslation } from 'react-i18next';

export type Translate = {
  i18n: Ii18n;
  t: TFunction<'translation', undefined>;
};

export const withTranslate = <Props,>(WrappedComponent: FC<Props & Translate>): FC<Props> => {
  return props => {
    const { i18n, t } = useTranslation();
    return <WrappedComponent t={t} i18n={i18n} {...props} />;
  };
};

export const withT = withTranslate;
