import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { useEffect } from 'react';
import { useRootDrawerNav } from 'src/libs/hooks/use-navigation';
import { useTranslation } from 'react-i18next';

type Msg = FirebaseMessagingTypes.RemoteMessage | null;

export const useMessaging = () => {
  const { navigate } = useRootDrawerNav();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const authStatus = await messaging().requestPermission();
      const { AUTHORIZED, PROVISIONAL } = messaging.AuthorizationStatus;
      const enabled = authStatus === AUTHORIZED || authStatus === PROVISIONAL;
      if (enabled) console.log('Authorization status:', authStatus);
    })();
  }, []);

  useEffect(() => {
    const handleMsg = (msg: Msg, alert: boolean) => {
      const title = msg?.notification?.title || '';
      const body = msg?.notification?.body;
      if (!msg) return;

      const show = (onPress: () => void) => {
        const showBtn = { text: t('Show'), onPress };
        const closeBtn = { text: t('Close') };
        Alert.alert(title, body, [closeBtn, showBtn]);
      };

      switch (msg.data?.Assign) {
        case 'shipment':
          const shipmentId = msg.data?.AssignID as string;
          if (alert && shipmentId) show(() => navigate('Shipment', { shipmentId }));
          else if (shipmentId) navigate('Shipment', { shipmentId });
          break;
      }
    };

    const withoutAlert = (msg: Msg) => handleMsg(msg, false);
    const withAlert = (msg: Msg) => handleMsg(msg, true);
    messaging().onNotificationOpenedApp(withoutAlert); // app is rollup
    messaging().getInitialNotification().then(withoutAlert); // app is close
    return messaging().onMessage(withAlert); // app is open
  }, [navigate, t]);
};
