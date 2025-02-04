import React, { FC, useEffect, useState } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';
import { pickSingleDoc, pickMultipleDoc } from 'src/libs/hooks/use-document-picker';
import { selectImage, takeImage } from 'src/libs/hooks/use-image-picker';

export type SelectDoc = Parameters<typeof pickSingleDoc>[0];
export type SelectDocs = Parameters<typeof pickMultipleDoc>[0];
export type SelectImg = Parameters<typeof selectImage>[0];
export type TakeImg = Parameters<typeof takeImage>[0];
type Item = { onPress: () => void; title: string };

type Props = {
  selectDoc?: SelectDoc;
  selectDocs?: SelectDocs;
  selectImg?: SelectImg;
  takeImg?: TakeImg;
};

export const SelectBtn: FC<Props> = props => {
  const { selectDoc, selectDocs, selectImg, takeImg } = props;
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const temp = [];
    if (takeImg) temp.push({ onPress: () => takeImage(takeImg), title: 'Take photo' });
    if (selectImg) temp.push({ onPress: () => selectImage(selectImg), title: 'Select photo' });
    if (selectDoc) temp.push({ onPress: () => pickSingleDoc(selectDoc), title: 'Select file' });
    if (selectDocs) temp.push({ onPress: () => pickMultipleDoc(selectDocs), title: 'Select files' });
    setItems(temp);
  }, [selectDoc, selectDocs, selectImg, takeImg]);

  return items.map((item, index) => {
    return (
      <TouchableOpacity key={index.toString()} onPress={item.onPress}>
        <MyText $t={item.title} style={styles.addFileBtnText} />
      </TouchableOpacity>
    );
  });
};

const styles = ScaledSheet.create({
  addFileBtnText: {
    backgroundColor: CLR_APP,
    borderRadius: 30,
    color: '#FFF',
    fontSize: '16@ms',
    fontWeight: 'bold',
    paddingHorizontal: '10@ms',
    paddingVertical: '22@ms',
    textAlign: 'center',
    marginBottom: '30@ms',
    marginHorizontal: '30@ms',
  },
});
