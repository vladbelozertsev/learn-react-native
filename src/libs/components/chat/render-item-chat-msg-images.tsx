import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, { FC } from 'react';
import { Image, TouchableOpacity, Modal, View } from 'react-native';
import { Message } from './utils';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { withOpen } from 'src/libs/hocs/with-open';

type Props = {
  images?: Message['images'];
};

export const RenderItemChatMsgImages: FC<Props> = withOpen(props => {
  const insets = useSafeAreaInsets();

  const paddings = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };

  if (!props.images?.length) return null;

  return (
    <View>
      <TouchableOpacity style={styles.imageBtn} onPress={props.show}>
        {props.images.map((image, index) => {
          const src = image.url ? { uri: image.url } : image.props?.source;
          return <Image style={styles.image} key={index.toString()} source={src} />;
        })}
      </TouchableOpacity>
      <Modal visible={props.open} onRequestClose={props.hide} transparent>
        <ImageViewer
          style={paddings}
          onCancel={props.hide}
          imageUrls={props.images}
          enableSwipeDown
          renderHeader={() => (
            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={props.hide}>
              <AntDesign name="close" color="#FFF" size={ms(32)} />
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
});

const styles = ScaledSheet.create({
  imageBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '10@ms',
    alignItems: 'flex-start',
  },
  image: {
    width: '75@ms',
    height: '75@ms',
    resizeMode: 'cover',
    marginBottom: '10@ms',
    marginRight: '10@ms',
    borderRadius: '5@ms',
  },
});
