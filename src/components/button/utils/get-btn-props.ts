import { ButtonProps } from '../button-0';
import { RegisteredStyle, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

type Prams = ButtonProps & {
  styles: { btn: RegisteredStyle<any>; text: RegisteredStyle<any> };
};

export const getBtnProps = (prams: Prams) => {
  const baseMargin = ms(prams.$mb === true ? 30 : +(prams.$mb || 0));
  const marginBottom = StyleSheet.flatten(prams.style)?.marginBottom || baseMargin;
  const height = StyleSheet.flatten(prams.style)?.height || ms(50);
  const style = [prams.styles.btn, prams.style, { height, marginBottom }];
  const $styleText = [prams.styles.text, prams.$styleText];
  return { ...prams, style, $styleText };
};
