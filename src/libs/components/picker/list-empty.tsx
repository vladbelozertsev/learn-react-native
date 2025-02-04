import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';

export const ListEmpty: FC = () => {
  return <MyText style={styles.text} $t="Nothing found" $end="..." />;
};

const styles = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: '16@ms',
    color: '#777',
    paddingVertical: '7@vs',
    paddingHorizontal: '12@ms',
  },
});
