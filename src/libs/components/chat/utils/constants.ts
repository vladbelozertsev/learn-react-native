import { IImageInfo } from 'react-native-image-zoom-viewer/built/image-viewer.type';

export type Message = {
  date: string;
  header?: string;
  icon?: any;
  images?: IImageInfo[];
  files?: { uri: string; name?: string }[];
  senderId: string | number;
  senderName: string;
  text: string;
};

export type MSG_TYPES_VALUES = valueof<typeof MSG_TYPES>;

export const MSG_TYPES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SYSTEM: 'SYSTEM',
} as const;
