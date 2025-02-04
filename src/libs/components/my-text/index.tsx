import React, { FC } from 'react';
import { MyTextProps } from './types/my-text-props';
import { Text } from 'react-native';
import { getTextAlign } from './utils/get-align';
import { getTransform } from './utils/get-transform';
import { ms } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

export const MyText: FC<MyTextProps> = props => {
  const { $edit, $t, $v } = props;
  const { t } = useTranslation();
  const textt = $t ? ($edit ? $edit(t($t + '')) : t($t + '')) : '';
  const textv = $v ? ($edit ? $edit($v + '') : $v + '') : '';

  const extraStyle = {
    backgroundColor: props.$bg ? props.$bg : undefined,
    color: props.$c ? props.$c : props.$cp ? CLR_APP : '#242424',
    flex: props.$f1 ? 1 : props.$f ? +props.$f : undefined,
    fontSize: ms(+(props.$fs || props.$h || 14)),
    fontWeight: props.$fw ? props.$fw : props.$bold || props.$h ? 'bold' : undefined,
    lineHeight: props.$lh ? ms(+props.$lh) : undefined,
    margin: props.$m ? ms(+props.$m) : undefined,
    marginBottom: props.$mb ? ms(+props.$mb) : undefined,
    marginHorizontal: props.$mh ? ms(+props.$mh) : undefined,
    marginLeft: props.$ml ? ms(+props.$ml) : undefined,
    marginRight: props.$mr ? ms(+props.$mr) : undefined,
    marginTop: props.$mt ? ms(+props.$mt) : undefined,
    marginVertical: props.$mv ? ms(+props.$mv) : undefined,
    textAlign: getTextAlign(props),
    textAlignVertical: props.$tav ? props.$tav : undefined,
    textTransform: getTransform(props),
    textDecorationLine: props.$underl ? 'underline' : undefined,
  } as const;

  return props.$v === null || props.$t === null || props.$hide ? null : (
    <Text {...props} style={[extraStyle, props.style]}>
      {!props.children && !!props.$t && (props?.$beg || '') + textt + (props?.$end || '')}
      {!props.children && !!props.$v && (props?.$beg || '') + textv + (props?.$end || '')}
      {!!props.children && props.children}
    </Text>
  );
};
