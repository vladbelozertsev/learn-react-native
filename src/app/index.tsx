import React, { FC, useEffect } from 'react';
import { RootDrawer } from './drawer';
import BootSplash from 'react-native-bootsplash';
import { View } from 'react-native';

export const App: FC = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);
  return <RootDrawer />;
};
