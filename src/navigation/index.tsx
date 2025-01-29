import * as auth from 'src/state/auth';
import React, { FC } from 'react';
import { Content } from './content';
import { HeaderBack } from './header-back';
import { HeaderClose } from './header-close';
import { HeaderMenu } from './header-menu';
import { HomeScreen } from 'src/screens/home';
import { LanguageScreen } from 'src/screens/language';
import { LoadItemOfferListScreen } from 'src/screens/load-item-offer-list';
import { LoadItemScreen } from 'src/screens/load-item';
import { LoadListScreen } from 'src/screens/load-list';
import { LoadRequestAScreen } from 'src/screens/load-request-a';
import { LoadRequestBScreen } from 'src/screens/load-request-b';
import { LoginScreen } from 'src/screens/login';
import { PaymentsScreen } from 'src/screens/payments';
import { PincodeScreen } from 'src/screens/pincode';
import { RootDrawerScreens } from 'src/types/screens';
import { ShipmentDeliveryPartScreen } from 'src/screens/shipment-delivery-part';
import { ShipmentScreen } from 'src/screens/shipment';
import { ShipmentsScreen } from 'src/screens/shipments';
import { SupportRequestAddScreen } from 'src/screens/support-request-add';
import { SupportRequestScreen } from 'src/screens/support-request';
import { SupportRequestsScreen } from 'src/screens/support-requests';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withT } from 'src/hocs/with-translate';

const Drawer = createDrawerNavigator<RootDrawerScreens>();

export const RootDrawer: FC = withT(({ t }) => {
  const isPincode = auth.useStateIsPincode()[0];
  const isBiometric = auth.useStateIsBiometric()[0];
  const isAvailable = auth.useStateIsBiometricAvailable()[0];
  const isAuth = auth.useValueIsAuth();
  const lang = auth.useStateLang()[0];

  const headerMenu = (data: any) => <HeaderMenu {...data} />;
  const headerClose = (data: any) => <HeaderClose {...data} />;
  const headerBackWhite = (data: any) => <HeaderBack {...data} white />;
  const headerBackPrimary = (data: any) => <HeaderBack {...data} />;

  /* prettier-ignore */
  return (
    <Drawer.Navigator drawerContent={Content} backBehavior="history">
      {!isAuth && !lang && (
        <Drawer.Group screenOptions={{ headerShown: false, swipeEnabled: false }}>
          <Drawer.Screen name={'Language'} component={LanguageScreen} />
        </Drawer.Group>
      )}
      {!isAuth && !!lang && (
        <Drawer.Group screenOptions={{ headerShown: false, swipeEnabled: false }}>
          <Drawer.Screen name={'Login'} component={LoginScreen} />
        </Drawer.Group>
      )}
      {isAuth && !isPincode && !isBiometric && (
        <Drawer.Group screenOptions={{ headerShown: false }}>
          {isAvailable && <Drawer.Screen name={'Biometric'} component={BiometricScreen} />}
          {!isAvailable && <Drawer.Screen name={'Pincode'} component={PincodeScreen} />}
        </Drawer.Group>
      )}
      {isAuth && (isPincode || isBiometric) && (
        <Drawer.Group screenOptions={{ header: headerBackWhite }}>
          <Drawer.Screen name={'Home'} component={HomeScreen} options={{ header: headerMenu }} />
          <Drawer.Screen name={'AboutUs'} component={AboutUsScreen} options={{ title: t('About Us') }} />
          <Drawer.Screen name={'Blog'} component={BlogScreen} options={{ title: t('Blog') }} />
          <Drawer.Screen name={'Blogs'} component={BlogsScreen} options={{ title: t('Blog') }} />
          <Drawer.Screen name={'Bookings'} component={BookingsScreen} options={{ header: headerBackPrimary, title: t('Booking') }} />
          <Drawer.Screen name={'Claim'} component={ClaimScreen} options={{ title: t('Claim') }} />
          <Drawer.Screen name={'ClaimAdd'} component={ClaimAddScreen} options={{ title: t('Add claim') }} />
          <Drawer.Screen name={'Claims'} component={ClaimsScreen} options={{ title: t('Arbitrage') }} />
          <Drawer.Screen name={'Documents'} component={DocumentsScreen} options={{ title: t('Documents') }} />
          <Drawer.Screen name={'Language'} component={LanguageScreen} options={{ header: headerClose }} />
          <Drawer.Screen name={'Payments'} component={PaymentsScreen} options={{ header: headerBackPrimary, title: t('Balance') }} />
          <Drawer.Screen name={'Shipment'} component={ShipmentScreen} options={{ title: '' }} />
          <Drawer.Screen name={'ShipmentDeliveryPart'} component={ShipmentDeliveryPartScreen} options={{ title: t('Delivery') }} />
          <Drawer.Screen name={'Shipments'} component={ShipmentsScreen} options={{ title: t('Track&Trace') }} />
          <Drawer.Screen name={'SupportRequest'} component={SupportRequestScreen} options={{ title: t('Support request') }} />
          <Drawer.Screen name={'SupportRequestAdd'} component={SupportRequestAddScreen} options={{ title: t('Support request') }} />
          <Drawer.Screen name={'SupportRequests'} component={SupportRequestsScreen} options={{ title: t('Support') }} />
          <Drawer.Screen name={'LoadRequestA'} component={LoadRequestAScreen} options={{ title: t('Add load') }} />
          <Drawer.Screen name={'LoadRequestB'} component={LoadRequestBScreen} options={{ title: t('Add load') }} />
          <Drawer.Screen name={'LoadList'} component={LoadListScreen} options={{ title: t('My loads') }} />
          <Drawer.Screen name={'LoadItem'} component={LoadItemScreen} options={{ title: t('My load') }} />
          <Drawer.Screen name={'LoadItemOfferList'} component={LoadItemOfferListScreen} options={{ title: '' }} />
        </Drawer.Group>
      )}
    </Drawer.Navigator>
  );
});
