import * as Navigation from '@react-navigation/drawer';
import React, { FC } from 'react';
import { ContentFooter } from './content-footer';
import { ContentHeader } from './content-header';
import { ContentItems } from './content-items';
import { ScaledSheet } from 'react-native-size-matters';

type Props = Navigation.DrawerContentComponentProps;

export const Content: FC<Props> = props => {
  return (
    <Navigation.DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <ContentHeader />
      <ContentItems navigation={props.navigation} />
      <ContentFooter navigation={props.navigation} />
    </Navigation.DrawerContentScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
});
