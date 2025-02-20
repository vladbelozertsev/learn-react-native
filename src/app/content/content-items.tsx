import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { FC } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MyText } from 'src/libs/components/my-text';
import { Route } from 'src/libs/types/screens';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  navigation: DrawerContentComponentProps['navigation'];
};

export const ContentItems: FC<Props> = props => {
  const { navigate } = props.navigation;

  const go = (route: Route) => {
    if (!route) return () => {};
    return () => navigate(...route);
  };

  return (
    <View style={styles.rootView}>
      <TouchableOpacity style={styles.itemView} onPress={go(['Home'])}>
        <AntDesign style={styles.icon} name="home" />
        <MyText style={styles.text} $v="Home" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexGrow: 1,
  },
  itemView: {
    padding: '15@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: '18@ms',
    paddingLeft: '10@ms',
    color: '#242424',
  },
  icon: {
    fontSize: '24@ms',
    color: CLR_APP,
  },
  img: {
    width: '24@ms',
    height: '24@ms',
  },
});
