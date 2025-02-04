import { atom } from 'jotai';
// import { UserAPI } from 'types/user-api';

export const isPincodeAtom = atom<boolean>(false);
export const langAtom = atom<string | undefined>(undefined);
export const userAtom = atom<any | undefined | null>(undefined);
export const isAuthAtom = atom<boolean>(get => +(get(userAtom)?.id || 0) > 2);
