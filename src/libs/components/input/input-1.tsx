import * as RHF from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, FC } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import { Input0 } from './input-0';
import { MyShadow, MyShadowProps } from 'src/libs/components/my-shadow';
import { MyText } from 'src/libs/components/my-text';
import { TouchableOpacity, TextInput, View, TextStyle } from 'react-native';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { getPhoneMask } from 'src/libs/utils/get-phone-mask';
import { useTranslation } from 'react-i18next';

export type Input1Props = TextInput['props'] & {
  $colon?: boolean;
  $floatNumber?: boolean;
  $hide?: boolean;
  $hideIconError?: boolean;
  $isError?: boolean;
  $mb?: boolean | string | number;
  $ph?: string;
  $phone?: boolean;
  $pht?: string;
  $rhf?: { field?: RHF.ControllerRenderProps<any, any>; fieldState?: RHF.ControllerFieldState };
  $rqd?: boolean;
  $secure?: boolean;
  $securetgl?: boolean;
  $shadowProps?: MyShadowProps;
  $styleIconEye?: IconProps['style'];
  $styleIconEyeBtn?: StyleProp<ViewStyle>;
  $styleInput?: StyleProp<TextStyle>;
  $styleRHFError?: StyleProp<TextStyle>;
  $styleRootView?: StyleProp<ViewStyle>;
  $styleShadow?: MyShadowProps['style'];
  $styleTopText?: StyleProp<TextStyle>;
  $textarea?: boolean;
  $toNumber?: boolean;
  $t?: string;
  $v?: string;
};

export const Input1: FC<Input1Props> = props => {
  const [secure, setSecure] = useState(props.secureTextEntry || props.$secure || props.$securetgl);
  const [tempValue, setTempValue] = useState<string>('');
  const end = `${props.$colon ? ':' : ''}${props.$rqd ? '*' : ''}`;
  const changeHandler = props.$rhf?.field?.onChange || props.onChangeText;
  const topText = (!!props.$v || !!props.$t) && { $t: props.$t, $v: props.$v };
  const rhfErrMsg = props.$rhf?.fieldState?.error?.message;
  const ph = props.placeholder || props.$ph || props.$pht;
  const style = StyleSheet.flatten(props.$styleInput);
  const rhfVal = props.$rhf?.field?.value;
  const rhfValNr = isNaN(rhfVal) ? rhfVal : rhfVal ? rhfVal?.toString() : '';
  const t = useTranslation().t;

  const br = {
    $brTopLeft: style?.borderTopLeftRadius,
    $brTopRight: style?.borderTopRightRadius,
    $brBottomLeft: style?.borderBottomLeftRadius,
    $brBottomRight: style?.borderBottomRightRadius,
    $br: style?.borderRadius,
  };

  const onChangeText = (value: string) => {
    if (!changeHandler) return;
    if (props.$phone) return changeHandler(getPhoneMask(value));
    if (!props.$floatNumber && !props.$toNumber) return changeHandler(value);
    if (value.slice(-1) === '.' && props.$floatNumber) return setTempValue(value);
    if (!props.$toNumber) return [changeHandler(value), setTempValue('')];
    const toNum = value && !isNaN(+value) ? parseFloat(value) : 0;
    props.$rhf?.field?.onChange(toNum);
    setTempValue('');
  };

  return props.$hide ? null : (
    <View style={props.$styleRootView}>
      {topText && <MyText style={props.$styleTopText} {...topText} $end={end} />}
      <MyShadow {...props.$shadowProps} style={props.$styleShadow} {...br}>
        <Input0
          {...props}
          keyboardType={props.$phone ? 'number-pad' : props.$floatNumber ? 'numeric' : props.keyboardType}
          multiline={!!props.$textarea}
          numberOfLines={props.$textarea ? 5 : undefined}
          onChangeText={onChangeText}
          placeholder={props.$pht ? t(props.$pht) : ph}
          secureTextEntry={secure}
          style={props.$styleInput}
          value={tempValue || rhfValNr || props.value || ''}
        />
        {props.$securetgl && (
          <TouchableOpacity style={props.$styleIconEyeBtn} onPress={() => setSecure(!secure)}>
            <Ionicons style={props.$styleIconEye} name={`eye${secure ? '' : '-off'}`} />
          </TouchableOpacity>
        )}
      </MyShadow>
      {!!rhfErrMsg && <MyText style={props.$styleRHFError} $v={rhfErrMsg} />}
    </View>
  );
};

/**
 * Usefull links:
 * https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component
 *
 * $floatNumber - т.к. в инпут нельзя ввести точку с одновременным преобразованием строки в число (нужно для реакт хук форм)
 * было добавлен проп - floatNumber (boolean), внутри текущего компонента добавлен стейт с временным значением, который
 * нужен для хранения числа в виде строки с послед значением символом - точка "."
 *
 * $toNumber - получаемое значение floatNumber может быть передано в обработчик в виде числа либо в виде строки.
 * Если toNumber = true, то в обработчик будет передано числовое значение (number)
 *
 * При изменение value инпута на undefined НЕ происходит смена его значения. Т.е. старое значение остается,
 * чтобы значение изменилось нужно присваивать не undefined, а пустую строку - ''
 **/
