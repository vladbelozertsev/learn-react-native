import messaging from '@react-native-firebase/messaging';

const useSendPush = async () => {
  console.log('sss');
  const token = await messaging().getToken();

  const push = {
    token,
    title: 'hello',
    body: 'push',
  };

  const r = await fetch('http://10.0.2.2:3000/api/push', {
    method: 'POST',
    body: JSON.stringify(push),
    headers: {
      Authorization: '220981',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).catch(console.error);
};
