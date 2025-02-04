import { Dispatch, SetStateAction } from 'react';
import DocumentPicker, {
  DirectoryPickerResponse as Directory,
  DocumentPickerResponse as Document,
  isInProgress,
} from 'react-native-document-picker';

export type SelectDoc = (doc: Document) => void | Dispatch<SetStateAction<Document>>;
export type SelectDocs = (docs: Document[]) => void | Dispatch<SetStateAction<Document[]>>;
export type SelectDir = (dir: Directory) => void | Dispatch<SetStateAction<Directory>>;

const handleError = (err: any) => {
  if (DocumentPicker.isCancel(err)) console.warn('cancelled');
  else if (isInProgress(err)) console.warn('multiple pickers were opened, only the last will be considered');
  else console.error(err);
};

export const pickSingleDoc = async (prams: {
  callback: SelectDoc;
  options?: Parameters<typeof DocumentPicker.pickSingle>[0];
}) => {
  try {
    const document = await DocumentPicker.pickSingle(prams.options);
    prams.callback(document);
  } catch (err) {
    handleError(err);
  }
};

export const pickMultipleDoc = async (prams: {
  callback: SelectDocs;
  options?: Parameters<typeof DocumentPicker.pick>[0];
}) => {
  try {
    const args = { allowMultiSelection: true, ...prams.options };
    const documents = await DocumentPicker.pick(args);
    prams.callback(documents);
  } catch (err) {
    handleError(err);
  }
};

export const pickDirectory = async (prams: {
  callback: SelectDir;
  options?: Parameters<typeof DocumentPicker.pickDirectory>[0];
}) => {
  try {
    const directory = await DocumentPicker.pickDirectory(prams.options);
    if (directory) prams.callback(directory);
  } catch (err) {
    handleError(err);
  }
};

/**
 * Usefull links
 * https://github.com/rnmods/react-native-document-picker/blob/master/example/App.tsx - example
 **/
