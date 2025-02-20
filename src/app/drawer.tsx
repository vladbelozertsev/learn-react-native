import * as api from 'src/libs/types/api';
import React, { FC } from 'react';
import { CarCreate } from 'src/Ω/car-create';
import { CarItem } from 'src/Ω/car-item';
import { CarList } from 'src/Ω/car-list';
import { Content } from './content/content';
import { HeaderBack } from './content/header-back';
import { HeaderMenu } from './content/header-menu';
import { Home } from 'src/Ω/home';
import { Signup } from 'src/Ω/signup';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type Screens = {
  Home: undefined;
  CarList: undefined;
  CarItem: api.QueryCarArgs['where'];
  CarCreate: undefined;
  Signup: undefined;
  Login: undefined;
};

const Drawer = createDrawerNavigator<Screens>();

export const RootDrawer: FC = () => {
  const menu = (data: any) => <HeaderMenu {...data} />;
  const back = (data: any) => <HeaderBack {...data} />;

  /* prettier-ignore */
  return (
    <Drawer.Navigator drawerContent={Content} backBehavior="history" screenOptions={{ header: back }}>
      <Drawer.Screen name={'Home'} component={Home} options={{ header: menu }} />
      <Drawer.Screen name={'CarList'} component={CarList} />
      {/* <Drawer.Screen name={'CarItem'} component={CarItem} />
      <Drawer.Screen name={'CarCreate'} component={CarCreate} />
      <Drawer.Screen name={'Signup'} component={Signup} /> */}
    </Drawer.Navigator>
  );
};
