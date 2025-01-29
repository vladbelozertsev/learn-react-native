import Modal from 'react-native-modal';
import React from 'react';
import { Asset } from 'react-native-image-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { GetImageOrVideo } from 'src/hooks/use-image-picker';
import { Loading } from 'src/components/loading';
import { MyToast } from 'src/components/my-toast';
import { ScaledSheet } from 'react-native-size-matters';
import { ScrollView } from 'react-native';
import { SelectBtn, SelectDoc, SelectDocs } from './select-btn';
import { Uploaded } from './uploaded';
import { CloseBtn } from './close-btn';

export type AddFileModalProps<T> = {
  open: boolean;
  closeOnSelect?: boolean;
  isLoading?: boolean;
  selectDoc?: SelectDoc;
  selectDocs?: SelectDocs;
  selectImg?: GetImageOrVideo;
  showBtnsOnly?: boolean;
  showFilesOnly?: boolean;
  takeImg?: GetImageOrVideo;
  download?: boolean;
  docs?: (DocumentPickerResponse & { _extra?: T })[];
  assets?: (Asset & { _extra?: T })[];
  files?: ((Asset & { _extra?: T }) | (DocumentPickerResponse & { _extra?: T }))[];
  filesAPI?: (FileAPI & { _extra?: T })[];
  hide: () => void;
  removeDoc?: (uri: DocumentPickerResponse['uri'], _extra?: T) => void;
  removeAsset?: (uri: Asset['uri'], _extra?: T) => void;
  removeFileAPI?: (id: FileAPI['ID'], _extra?: T) => void;
};

export const AddFileModal = <T,>(props: AddFileModalProps<T>) => {
  const { open, hide, isLoading, showFilesOnly, showBtnsOnly } = props;

  const selectDoc = {
    options: props.selectDoc?.options,
    callback: (document: DocumentPickerResponse) => {
      if (props.selectDoc) props.selectDoc.callback(document);
      if (props.closeOnSelect) props.hide();
    },
  };

  const selectDocs = {
    options: props.selectDocs?.options,
    callback: (documents: DocumentPickerResponse[]) => {
      if (props.closeOnSelect) props.hide();
      if (props.selectDocs) props.selectDocs.callback(documents);
    },
  };

  const selectImg = (assets: Asset[]) => {
    if (props.selectImg) props.selectImg(assets);
    if (props.closeOnSelect) props.hide();
  };

  const takeImg = (assets: Asset[]) => {
    if (props.takeImg) props.takeImg(assets);
    if (props.closeOnSelect) hide();
  };

  return (
    <Modal isVisible={open} onBackButtonPress={hide} onBackdropPress={hide} propagateSwipe>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {isLoading && <Loading />}
        {!isLoading && !showFilesOnly && (
          <SelectBtn
            selectDoc={props.selectDoc ? selectDoc : undefined}
            selectDocs={props.selectDocs ? selectDocs : undefined}
            selectImg={props.selectImg ? selectImg : undefined}
            takeImg={props.takeImg ? takeImg : undefined}
          />
        )}
        {!isLoading && <CloseBtn hide={props.hide} />}
        {!isLoading && !showBtnsOnly && <Uploaded {...props} />}
      </ScrollView>
      <MyToast />
    </Modal>
  );
};

const styles = ScaledSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
    flexGrow: 0,
    height: 'auto',
    paddingHorizontal: '15@ms',
    paddingTop: '30@ms',
    borderRadius: 30,
    marginVertical: '15%',
  },
});

/**
 * Usefull links:
 * https://reactnative.dev/docs/backhandler - backhandler
 * https://stackoverflow.com/questions/45031085/react-native-device-back-button-handling - handle back
 * https://stackoverflow.com/questions/50199385/backandroid-backhandler-event-listeners-are-not-triggered-when-set-in-a-modals - close modal by push back button
 **/
