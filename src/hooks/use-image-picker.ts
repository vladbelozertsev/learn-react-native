import { CameraOptions, Asset } from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export type GetImageOrVideo = (assets: Asset[]) => void;

export const takeImage = (cb: GetImageOrVideo, options?: CameraOptions) => {
  try {
    const mediaType = 'photo';
    const includeBase64 = false;
    const includeExtra = true;
    const basic = { mediaType, includeBase64, includeExtra } as const;
    launchCamera({ ...basic, ...options }, r => cb([...(r.assets || [])]));
  } catch (err) {
    console.error(err);
  }
};

export const selectImage = (cb: GetImageOrVideo, options?: CameraOptions) => {
  try {
    const mediaType = 'photo';
    const selectionLimit = 0;
    const includeBase64 = false;
    const includeExtra = true;
    const basic = { mediaType, selectionLimit, includeBase64, includeExtra } as const;
    launchImageLibrary({ ...basic, ...options }, r => cb([...(r.assets || [])]));
  } catch (err) {
    console.error(err);
  }
};

export const takeVideo = (cb: GetImageOrVideo, options?: CameraOptions) => {
  try {
    const mediaType = 'video';
    const saveToPhotos = true;
    const includeExtra = true;
    const basic = { mediaType, saveToPhotos, includeExtra } as const;
    launchCamera({ ...basic, ...options }, r => cb([...(r.assets || [])]));
  } catch (err) {
    console.error(err);
  }
};

export const selectVideo = (cb: GetImageOrVideo, options?: CameraOptions) => {
  try {
    const mediaType = 'video';
    const selectionLimit = 0;
    const includeExtra = true;
    const basic = { mediaType, selectionLimit, includeExtra } as const;
    launchImageLibrary({ ...basic, ...options }, r => cb([...(r.assets || [])]));
  } catch (err) {
    console.error(err);
  }
};

export const selectImageOrVideo = () => (cb: GetImageOrVideo, options?: CameraOptions) => {
  try {
    const mediaType = 'mixed';
    const selectionLimit = 0;
    const includeExtra = true;
    const basic = { mediaType, selectionLimit, includeExtra } as const;
    launchImageLibrary({ ...basic, ...options }, r => cb([...(r.assets || [])]));
  } catch (err) {
    console.error(err);
  }
};

/**
 * Usefull links
 * https://github.com/react-native-image-picker/react-native-image-picker/blob/main/example/src/App.tsx - example
 **/
