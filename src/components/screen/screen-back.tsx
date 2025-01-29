import Entypo from 'react-native-vector-icons/Entypo';
import React, { FC } from 'react';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';
import { useRootDrawerNav } from 'src/hooks/use-navigation';

type Props = {
  title: string;
};

export const ScreenBack: FC<Props> = props => {
  const navigation = useRootDrawerNav();

  return (
    <View style={styles.rootView}>
      <Entypo style={styles.backIcon} name={'chevron-left'} onPress={navigation.goBack} />
      <MyText style={styles.titleText} $t={props.title} />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    padding: '5@ms',
    paddingVertical: '15@vs',
    flexGrow: 0,
  },
  titleText: {
    alignSelf: 'center',
    flex: 1,
    fontSize: '17@ms',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backIcon: {
    alignSelf: 'center',
    fontSize: '22@ms',
    color: '#242424',
    padding: '3@ms',
  },
});
