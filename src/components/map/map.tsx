import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, { MapViewProps } from 'react-native-maps';
import Modal from 'react-native-modal';
import React, { forwardRef } from 'react';
import { Loading } from 'src/components/loading';
import { MapEmpty } from './map-empty';
import { Open } from 'src/hocs/with-open';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = Open &
  MapViewProps & {
    children: React.ReactNode;
    isEmpty?: boolean | string;
    isLoading?: boolean;
  };

export const Map = forwardRef<MapView, Props>((props, ref) => {
  const { isEmpty, isLoading, children } = props;
  const { top, bottom } = useSafeAreaInsets();
  const styles = getStyles(top, bottom);

  return (
    <Modal style={styles.container} isVisible={props.open}>
      <TouchableOpacity style={styles.closeBtn} onPress={props.hide}>
        <AntDesign name="close" color={CLR_APP} size={ms(42)} />
      </TouchableOpacity>
      {isLoading && <Loading full />}
      {!isLoading && isEmpty && <MapEmpty />}
      {!isLoading && !isEmpty && (
        <MapView ref={ref} style={styles.map} {...props}>
          {children}
        </MapView>
      )}
    </Modal>
  );
});

const getStyles = (top: number, bottom: number) => {
  return ScaledSheet.create({
    container: {
      backgroundColor: '#FFF',
      margin: 0,
      paddingBottom: bottom,
      paddingTop: top,
    },
    map: {
      height: '100%',
      width: '100%',
    },
    closeBtn: {
      position: 'absolute',
      right: 0,
      top: top,
      zIndex: 999999,
    },
  });
};
