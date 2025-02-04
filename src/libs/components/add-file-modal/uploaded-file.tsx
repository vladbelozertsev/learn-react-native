import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { FC, useState } from 'react';
import { Image, TouchableOpacity, View, LayoutChangeEvent } from 'react-native';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';

type Props = {
  uri?: string;
  fileName?: string;
  remove?: () => void;
};

export const UploadedFile: FC<Props> = props => {
  const { uri, fileName, remove } = props;
  const [height, setHeight] = useState(0);
  const imageTypes = ['.png', '.svg', '.jpg', '.jpeg'];
  const type = fileName?.substring(fileName.indexOf('.'));
  const isImage = imageTypes.includes(type || '');

  const onLayout = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  };

  return (
    <View style={styles.rootView} onLayout={onLayout}>
      {isImage && <Image source={{ uri }} style={[styles.fileImg, { height }]} resizeMode="cover" />}
      {!isImage && <MCI style={styles.fileIcon} name="file-document-outline" />}
      <View style={styles.fileNameView}>
        <MyText $v={fileName || 'unknown'} style={styles.fileNameText} />
      </View>
      {!remove && <View />}
      {!!remove && (
        <TouchableOpacity style={[styles.removeBtn, { height }]} onPress={remove}>
          <FontAwesome style={styles.deleteIcon} name="trash" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15@ms',
  },
  fileNameView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    minHeight: '60@ms',
    paddingHorizontal: '10@ms',
    justifyContent: 'center',
  },
  fileNameText: {
    color: '#242424',
    fontSize: '16@ms',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  downloadIcon: {
    color: '#242424',
    fontSize: '18@ms',
  },
  removeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30@ms',
  },
  deleteIcon: {
    fontSize: '28@ms',
    fontWeight: 'bold',
    color: 'tomato',
  },
  fileIcon: {
    fontSize: '55@ms',
    color: CLR_APP,
  },
  fileImg: {
    width: '55@ms',
    borderRadius: 8,
  },
});
