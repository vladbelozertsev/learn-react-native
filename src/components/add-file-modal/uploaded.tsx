import React, { FC } from 'react';
import { AddFileModalProps } from '.';
import { Asset } from 'react-native-image-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { URLS } from 'src/utils/env';
import { UploadedFile } from './uploaded-file';
import { View } from 'react-native';
import { getExtByMime } from 'src/utils/mime-types';

type Props = AddFileModalProps<any>;

export const Uploaded: FC<Props> = props => {
  const { removeDoc, removeAsset, removeFileAPI, filesAPI, download } = props;
  const files = { assets: props.assets || [], docs: props.docs || [] };

  props.files?.forEach(file => {
    const isAsset = Object.hasOwn(file, 'fileName');
    const isDocs = Object.hasOwn(file, 'name');
    if (isAsset) files.assets.push(file as Asset);
    else if (isDocs) files.docs.push(file as DocumentPickerResponse);
  });

  return !files.docs?.length && !files.assets?.length && !filesAPI?.length ? null : (
    <View style={styles.rootView}>
      <MyText $t="Attached files" $end=":" $mb="10" $h="18" />
      {files.assets?.map((asset, index) => {
        const key = index.toString();
        const remove = removeAsset ? () => removeAsset(asset.uri, asset._extra) : undefined;
        const data = { remove, download, ...asset };
        return <UploadedFile key={key} {...data} />;
      })}
      {files.docs?.map((doc, index) => {
        const key = index.toString();
        const docName = doc.name || 'unknown';
        const ext = docName.indexOf('.') !== -1;
        const fileName = ext ? docName : `${docName}${getExtByMime(doc.type)}`;
        const remove = removeDoc ? () => removeDoc(doc.uri, doc._extra) : undefined;
        const data = { remove, fileName, download, uri: doc.uri };
        return <UploadedFile key={key} {...data} />;
      })}
      {filesAPI?.map((fileAPI, index) => {
        const key = index.toString();
        const fileName = fileAPI.File;
        const uri = `${URLS.FILE}${fileAPI.Path}${fileAPI.File}`;
        const remove = removeFileAPI ? () => removeFileAPI(fileAPI.ID) : undefined;
        return <UploadedFile key={key} remove={remove} uri={uri} fileName={fileName} />;
      })}
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    marginBottom: '15@ms',
  },
});
