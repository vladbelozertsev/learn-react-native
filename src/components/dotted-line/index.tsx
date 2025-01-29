import React, { FC, useEffect, useState } from 'react';
import { Text, TextStyle } from 'react-native';

type Props = {
  dashed?: boolean;
  style?: TextStyle;
  clr?: string;
};

export const DottedLine: FC<Props> = props => {
  const [dots, setDots] = useState('');
  const [dashes, setDashes] = useState('');
  const color = props.clr || '#242424';
  const fontSize = props.style?.fontSize || 14;
  const lineHeight = fontSize / 1.5;
  const style = [{ color, fontSize, lineHeight }, props.style];

  useEffect(() => {
    if (props.dashed) setDashes('-'.repeat(500));
    if (!props.dashed) setDots('.'.repeat(500));
  }, [props.dashed]);

  return (
    <Text style={style} ellipsizeMode="clip" numberOfLines={1} accessible={false}>
      {props.dashed && dashes}
      {!props.dashed && dots}
    </Text>
  );
};

/**
 * Usefull links:
 * https://stackoverflow.com/questions/55588821/how-can-i-display-dotted-line-in-react-native - dotted line
 * https://reactnative.dev/docs/accessibility - accessibility
 **/
