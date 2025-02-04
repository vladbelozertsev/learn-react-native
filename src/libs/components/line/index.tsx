import React, { FC, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Stage } from './stage';

type Props = {
  stages?: { dot?: string; line?: string | null; desc?: string }[];
  fill?: { color?: string; length: number; start?: string; end?: string };
  mt?: boolean;
};

export const Line: FC<Props> = props => {
  const [marginTop, setMarginTop] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    if (props.mt) setMarginTop(height - ms(14));
  };

  return (
    <View style={[styles.stagesView, { marginTop }]} onLayout={onLayout}>
      {!props.fill
        ? props.stages?.map((data, index) => {
            const isFirst = index === 0;
            const isLast = index === props.stages?.length! - 1;
            return <Stage key={index} isFirst={isFirst} isLast={isLast} {...data} />;
          })
        : [...Array(props.fill.length)].map((_, index) => {
            const isFirst = index === 0;
            const isLast = index === props.fill?.length! - 1;
            const color = { line: props.fill?.color, dot: props.fill?.color };
            const desc = isFirst ? props.fill?.start : isLast ? props.fill?.end : '';
            return <Stage key={index} isFirst={isFirst} isLast={isLast} desc={desc} {...color} />;
          })}
    </View>
  );
};

const styles = ScaledSheet.create({
  stagesView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
