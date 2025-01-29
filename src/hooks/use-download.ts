import ReactNativeBlobUtil, { FetchBlobResponse } from 'react-native-blob-util';
import Share from 'react-native-share';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { mimeTypes } from 'src/utils/mime-types';
import { useCallback, useState } from 'react';
import { useIsMounted } from './use-helpers';

type Prams = {
  fileName?: string;
  description?: string;
  fetch: Parameters<(typeof ReactNativeBlobUtil)['fetch']>;
  onSuccess?: (r?: FetchBlobResponse | void) => void;
  onFail?: (err?: any) => void;
};

export const useDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();

  const download = useCallback(
    (prams: Prams) => {
      if (isMounted.current) setIsLoading(true);
      const { onSuccess, onFail, description } = prams;
      const { DownloadDir, DocumentDir } = ReactNativeBlobUtil.fs.dirs;
      const dir = Platform.OS === 'ios' ? DocumentDir : DownloadDir;
      const fileName = prams.fileName || `dl_${new Date().getTime()}.pdf`;
      const ext = fileName.substring(fileName.indexOf('.'));

      const checkPermission = async () => {
        if (Platform.OS === 'ios') return true;
        try {
          if (Number(Platform.Version) >= 33) return true;
          const title = 'Storage permission required';
          const message = 'Allow the application to download the file';
          const ratinonale = { title, message, buttonPositive: 'ok' };
          const storage = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
          const permission = await PermissionsAndroid.request(storage, ratinonale);
          return permission === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.error(err);
        }
      };

      const shareOnIos = (r: FetchBlobResponse) => {
        if (Platform.OS !== 'ios') return r;
        const type = mimeTypes[ext] || 'application/pdf';
        const options = { url: r.path(), saveToFiles: true };
        return Share.open({ type, ...options }).then(() => r);
      };

      checkPermission().then(permission => {
        if (!permission) {
          Alert.alert('Storage permission not granted');
          return setIsLoading(false);
        }
        ReactNativeBlobUtil.config({
          path: `${dir}/${fileName}`,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            description,
          },
        })
          .fetch(...prams.fetch)
          .then(r => shareOnIos(r))
          .then(r => onSuccess && onSuccess(r))
          .catch((err: unknown) => (onFail ? onFail(err) : console.error(err)))
          .finally(() => isMounted.current && setIsLoading(false));
      });
    },
    [isMounted],
  );

  return { isLoading, download };
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/76311685/permissionandroid-request-always-returns-never-ask-again-without-any-prompt-r - Number(Platform.Version) >= 33
 * https://stackoverflow.com/questions/57144505/rn-fetch-blob-ask-for-storage-automatically - stackoverflow permission
 * https://stackoverflow.com/questions/44546199/how-to-download-a-file-with-react-native - stackoverflow setup
 * https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component - stackoverflow unmounted
 * https://www.youtube.com/watch?v=_mrXOgg4VXg - youtube tutorial
 * https://github.com/joltup/rn-fetch-blob/issues/694 - if app crashed
 * https://github.com/RonRadtke/react-native-blob-util/issues/161 - ios files is not visible
 **/
