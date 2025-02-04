import React, { FC } from 'react';
import Toast from 'react-native-toast-message';
import { FailToast } from './fail-toast';
import { MyErrorToast } from './my-error-toast';
import { MySuccessToast } from './my-success-toast';
import { ToastConfig } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
  error: MyErrorToast,
  fail: FailToast,
  success: MySuccessToast,
};

export const MyToast: FC = () => {
  return <Toast config={toastConfig} />;
};

/**
 * Useful links:
 * https://github.com/calintamas/react-native-toast-message/blob/main/docs/custom-layouts.md
 **/
