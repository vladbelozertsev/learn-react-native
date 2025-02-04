import React, { FC } from 'react';
import { Image } from 'react-native';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';

export const TopImg: FC = () => {
  return (
    <View style={styles.logoContainer}>
      <MyText style={styles.logoText} $t="Login" />
      <Image style={styles.img} source={require('../../assets/images/car.png')} />
    </View>
  );
};

const styles = ScaledSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '25@ms',
  },
  logoText: {
    fontSize: '25@ms',
    fontWeight: 'bold',
    position: 'absolute',
    top: '45@ms',
    left: '100@ms',
  },
  img: {
    width: '150@ms',
    height: '125@ms',
  },
});
