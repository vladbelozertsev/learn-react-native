import { MSG_TYPES, MSG_TYPES_VALUES } from './constants';

type Prams = {
  userId: string | number;
  systemId?: string | number;
  senderId: string | number;
};

export const getMsgType = (prams: Prams): MSG_TYPES_VALUES => {
  const { userId, systemId, senderId } = prams;
  if (senderId === userId) return MSG_TYPES.USER;
  if (senderId === systemId) return MSG_TYPES.SYSTEM;
  return MSG_TYPES.ADMIN;
};
