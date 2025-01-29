import React, { FC } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Alert, Linking, TouchableOpacity, View } from 'react-native';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';

export const Extra: FC = () => {
  const link = (url: string) => async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else Alert.alert(`Don't know how to open this URL: ${url}`);
  };

  return (
    <View style={styles.rootView}>
      <TouchableOpacity style={styles.btn} onPress={link('https://allcargo.market/registration')}>
        <MyText $t="Registration" $h="16" $mb="5" $cp />
        <MaterialIcons name="person-add-alt" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={link('https://allcargo.market/resetpassword')}>
        <MyText $t="Forgot password?" $h="16" $mb="5" $cp />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    marginTop: '25@ms',
    flex: 1,
    justifyContent: 'space-between',
  },
  btn: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: '25@ms',
    borderColor: CLR_APP,
    borderRightWidth: 0,
    borderTopLeftRadius: '25@ms',
    borderWidth: 2,
    flexDirection: 'row',
    paddingVertical: '8@ms',
    paddingHorizontal: '38@ms',
    alignItems: 'center',
  },
  icon: {
    fontSize: '28@ms',
    color: CLR_APP,
    marginLeft: '5@ms',
  },
});
