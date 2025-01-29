import React, { FC } from 'react';
import { InformationItem as Item } from './information-item';
import { MyShadow } from 'src/components/my-shadow';
import { Open } from 'src/hocs/with-open';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';
import { withT } from 'src/hocs/with-translate';

type Props = {
  mb?: string | number;
  modal?: Open;
  items: {
    t?: string;
    v?: string;
    icon?: React.ReactNode;
    node?: React.ReactNode;
    onPress?: () => void;
  }[];
};

export const InfoCard: FC<Props> = withT(props => {
  const source = require('../../assets/images/logo.png');

  return (
    <MyShadow $mb={props.mb} $innerBgImg={{ style: styles.rootView, imageStyle: styles.img, source }}>
      {props.items.map((item, key) => {
        if (item.icon) return <Item key={key} {...item} />;
        if (item.node) return <View key={key}>{item.node}</View>;
      })}
    </MyShadow>
  );
});

const styles = ScaledSheet.create({
  rootView: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: '15@ms',
    borderRadius: 20,
  },
  icon: {
    fontSize: '26@ms',
    color: CLR_APP,
  },
  img: {
    resizeMode: 'contain',
    opacity: 0.1,
  },
});
