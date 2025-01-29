import * as AC from 'react-native-autocomplete-dropdown';
import React, { FC } from 'react';
import { MyShadow } from 'src/components/my-shadow';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View } from 'react-native';

type Props = Omit<AC.IAutocompleteDropdownProps, 'ref'> & {
  $colon?: boolean;
  $errMsg?: string;
  $mb?: boolean | number | string;
  $rqd?: boolean;
  $t?: string;
  $v?: string;
};

export const InputAC: FC<Props> = props => {
  const topText = (!!props.$v || !!props.$t) && { $t: props.$t, $v: props.$v };
  const end = `${props.$colon ? ':' : ''}${props.$rqd ? '*' : ''}`;
  const isMb = typeof props.$mb === 'string' || typeof props.$mb === 'number';
  const marginBottom = isMb ? ms(+(props.$mb || 0)) : props.$mb === true ? ms(15) : 0;
  const Empty = () => null;

  return (
    <View style={{ marginBottom }}>
      <MyText style={styles.topText} $end={end} $hide={!topText} {...topText} />
      <MyShadow $br="15">
        <AC.AutocompleteDropdown
          EmptyResultComponent={<Empty />}
          inputContainerStyle={styles.input}
          rightButtonsContainerStyle={styles.buttons}
          {...props}
        />
      </MyShadow>
      <MyText style={styles.bottomText} $v={props.$errMsg} $hide={!props.$errMsg} />
    </View>
  );
};

const styles = ScaledSheet.create({
  input: {
    backgroundColor: '#FFF',
    borderRadius: '15@ms',
    color: '#242424',
    flex: 1,
    fontSize: '16@ms',
    height: '50@ms',
  },
  buttons: {
    height: '50@ms',
  },
  topText: {
    marginLeft: '12@ms',
    fontWeight: 'bold',
    fontSize: '14@ms',
    marginBottom: '2@ms',
  },
  bottomText: {
    color: '#F00',
    marginLeft: '10@ms',
    fontWeight: 'bold',
    margtinTop: '2@ms',
  },
});
