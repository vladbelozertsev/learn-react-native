import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { useEffect } from 'react';

type Msg = FirebaseMessagingTypes.RemoteMessage | null;

export const useMessaging = () => {
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
      const title = msg?.notification?.title || 'Push Notification';
      const body = msg?.notification?.body || 'Empty Message';
      if (!msg) return;

      const show = (onPress?: () => void) => {
        const showBtn = { text: 'Show', onPress };
        const closeBtn = { text: 'Close' };
        Alert.alert(title, body, [closeBtn, showBtn]);
      };

      if (alert) show();

      // switch (msg.data?.Assign) {
      //   case 'content':
      //     const blogId = msg.data?.AssignID as string;
      //     if (alert && blogId) show();
      //     break;
      // }
    };

    const withoutAlert = (msg: Msg) => handleMsg(msg, false);
    const withAlert = (msg: Msg) => handleMsg(msg, true);
    messaging().onNotificationOpenedApp(withoutAlert); // app is rollup
    messaging().getInitialNotification().then(withoutAlert); // app is close
    return messaging().onMessage(withAlert); // app is open
  }, []);
};
