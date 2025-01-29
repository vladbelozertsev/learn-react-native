import React, { FC } from 'react';
import { View } from 'react-native';
import { MapMarkerProps, Marker } from 'react-native-maps';
import { ScaledSheet } from 'react-native-size-matters';

export const MapDot: FC<MapMarkerProps> = props => {
  return (
    <Marker {...props}>
      <View style={styles.dotView}>
        <View style={styles.dot} />
      </View>
    </Marker>
  );
};

const styles = ScaledSheet.create({
  dotView: {
    alignItems: 'center',
    borderColor: CLR_APP,
    borderRadius: 999,
    borderWidth: 2,
    height: '20@ms',
    justifyContent: 'center',
    padding: 3,
    width: '20@ms',
  },
  dot: {
    backgroundColor: CLR_APP,
    borderRadius: 999,
    height: '7@ms',
    width: '7@ms',
  },
});
