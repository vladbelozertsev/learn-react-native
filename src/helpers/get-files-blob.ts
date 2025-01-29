import { Asset } from 'react-native-image-picker';
import { DocumentPickerResponse as DPR } from 'react-native-document-picker';
import { getExtByMime } from 'src/utils/mime-types';

type Nr = (index: number) => string;
type Prams1 = { files?: (DPR | Asset)[]; assets?: Asset[]; docs?: DPR[]; numbered?: undefined };
type Prams2 = { files?: (DPR | Asset)[]; assets?: Asset[]; docs?: DPR[]; numbered?: string };
type Prams3 = { files?: (DPR | Asset)[]; assets?: Asset[]; docs?: DPR[]; numbered?: Nr };

export function getFilesBlob(prams: Prams1): FileBlob[];
export function getFilesBlob(prams: Prams2): { [key: string]: FileBlob };
export function getFilesBlob(prams: Prams3): { [key: string]: FileBlob };
export function getFilesBlob(prams: Prams1 | Prams2 | Prams3) {
  const assets = prams.assets || [];
  const docs = prams.docs || [];
  const files: FileBlob[] = [];

  prams.files?.forEach(file => {
    if (Object.hasOwn(file, 'fileName')) assets.push(file as Asset);
    else if (Object.hasOwn(file, 'name')) docs.push(file as DPR);
  });

  assets.forEach(asset => {
    const uri = asset.uri || '';
    const name = asset.fileName || '';
    const type = asset.type || '';
    files.push({ uri, name, type });
  });

  docs.forEach(doc => {
    const type = doc.type || '';
    const ext = (doc.name?.indexOf('.') || -1) !== -1;
    const name = ext ? doc.name! : `${doc.name}${getExtByMime(type)}`;
    files.push({ uri: doc.uri, name, type });
  });

  if (prams.numbered) {
    return files.reduce((acc, cur, i) => {
      const num = prams.numbered;
      const isStr = typeof num === 'string';
      const key = isStr ? `${num}${i + 1}` : num!(i + 1);
      return { ...acc, [key!]: cur };
    }, {} as { [key: string]: FileBlob | undefined });
  }

  return files;
}
