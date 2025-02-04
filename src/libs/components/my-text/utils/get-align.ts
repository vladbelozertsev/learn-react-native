import { TextStyle } from 'react-native-size-matters';

type Prams = {
  $left?: boolean;
  $right?: boolean;
  $center?: boolean;
  $h?: string | number;
  $ta?: TextStyle['textAlign'];
};

export const getTextAlign = (prams: Prams) => {
  const left = prams.$left ? 'left' : undefined;
  const right = prams.$right ? 'right' : undefined;
  const center = prams.$center || prams.$h ? 'center' : undefined;
  return prams.$ta ? prams.$ta : left || right || center;
};
