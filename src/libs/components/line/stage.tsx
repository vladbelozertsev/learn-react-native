import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View } from 'react-native';

type Props = {
  line?: string | null;
  dot?: string;
  desc?: string;
  isLast: boolean;
  isFirst: boolean;
};

export const Stage: FC<Props> = props => {
  const lineWidth = props.isLast ? 0 : ms(70);
  const lineColor = props.line || '#ECECEC';
  const dotColor = props.dot || '#ECECEC';

  const text = {
    textAlign: props.isFirst ? 'left' : props.isLast ? 'right' : 'center',
    marginRight: props.isLast || props.isFirst ? 0 : ms(42),
    marginLeft: props.isFirst ? 0 : ms(-42),
  } as const;

  return (
    <View>
      <View style={{ width: ms(props.isLast ? 14 : 84) }}>
        <View style={[styles.dotView, { borderColor: dotColor }]} />
        <View style={[styles.lineView, { width: lineWidth, backgroundColor: lineColor }]} />
        {!!props.desc && <MyText style={[styles.text, text]} $t={props.desc} $c={dotColor} />}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  dotView: {
    borderRadius: 999,
    borderWidth: '2@ms',
    height: '14@ms',
    overflow: 'visible',
    width: '14@ms',
  },
  lineView: {
    height: '2@ms',
    left: '14@ms',
    marginVertical: '6@ms',
    position: 'absolute',
    top: 0,
  },
  text: {
    fontSize: '10@ms',
    fontStyle: 'italic',
  },
});
