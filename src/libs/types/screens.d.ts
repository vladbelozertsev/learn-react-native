import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import { FC } from 'react';
import { Screens } from 'src/app/drawer';

export type NavProp = DrawerNavigationProp<Screens>;
export type Route = pairsArr<Screens>;
export type ScreenProps<ScreenName extends keyof Screens> = DrawerScreenProps<Screens, ScreenName>;
export type Screen<ScreenName extends keyof Screens> = FC<ScreenProps<ScreenName>>;
