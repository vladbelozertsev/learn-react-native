import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { FC } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View } from 'react-native';
import { MyText } from 'src/components/my-text';
import { RootDrawerRoute } from 'src/types/screens';
import { ScaledSheet } from 'react-native-size-matters';

type Props = {
  navigation: DrawerContentComponentProps['navigation'];
};

export const ContentItems: FC<Props> = props => {
  const { navigate } = props.navigation;

  const go = (route: RootDrawerRoute) => {
    if (!route) return () => {};
    return () => navigate(...route);
  };

  return (
    <View style={styles.rootView}>
      <TouchableOpacity style={styles.itemView} onPress={go(['LoadList'])}>
        <Feather style={styles.icon} name={'box'} />
        <MyText style={styles.text} $t="My loads" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['LoadRequestA'])}>
        <Image style={styles.img} source={require('../assets/images/add-load.png')} />
        <MyText style={styles.text} $t="Add load" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Shipments'])}>
        <Feather style={styles.icon} name={'navigation'} />
        <MyText style={styles.text} $t="Track&Trace" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Payments'])}>
        <AntDesign style={styles.icon} name={'creditcard'} />
        <MyText style={styles.text} $t="Balance" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['SupportRequests'])}>
        <AntDesign style={styles.icon} name={'questioncircleo'} />
        <MyText style={styles.text} $t="Support" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Claims'])}>
        <AntDesign style={styles.icon} name={'exclamationcircleo'} />
        <MyText style={styles.text} $t="Arbitrage" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Blogs'])}>
        <FontAwesome style={styles.icon} name={'newspaper-o'} />
        <MyText style={styles.text} $t="Blog" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Documents'])}>
        <Ionicons style={styles.icon} name={'documents-outline'} />
        <MyText style={styles.text} $t="Documents" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemView} onPress={go(['Language'])}>
        <Feather style={styles.icon} name={'globe'} />
        <MyText style={styles.text} $t="Language" />
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
