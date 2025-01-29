import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { MyText } from 'src/components/my-text';
import { PickerItem } from './types';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { TouchableHighlight, View } from 'react-native';
import { withTranslate } from 'src/hocs/with-translate';

type Props = {
  onSelect: (id: string) => void;
  checkIcon?: boolean;
  item: PickerItem;
};

export const RenderPickerItemComp = withTranslate<Props>(props => {
  const { id, value, header, selected } = props.item;
  const text = props.item.t ? props.t(props.item.value) : value;
  const paddingLeft = ((header || 1) - 1) * ms(15);
  const fontSize = ms(18 - (header || 1));
  const fontWeight = header === 1 ? '600' : selected ? '500' : '400';
  const color = selected ? CLR_APP : '#000';

  const selectItem = () => props.onSelect(id);

  return (
    <TouchableHighlight
      onPress={selectItem}
      style={[styles.rootBtn, { paddingLeft }]}
      underlayColor={'rgba(0,0,0,0.1)'}
      activeOpacity={0.25}>
      <View style={styles.contentView}>
        <View style={styles.circleView}>
          {selected && props.checkIcon && <FontAwesome5 name="check" />}
          {selected && !props.checkIcon && <View style={styles.circle} />}
        </View>
        <MyText style={[styles.btnText, { fontSize, fontWeight, color }]} $v={text} />
      </View>
    </TouchableHighlight>
  );
});

const styles = ScaledSheet.create({
  rootBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    flex: 1,
    flexGrow: 1,
    paddingRight: '20@ms',
    paddingVertical: '10@ms',
    width: '100%',
  },
  contentView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontSize: '16@ms',
    marginRight: '15@ms',
  },
  circleView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25@ms',
  },
  circle: {
    backgroundColor: CLR_APP,
    borderRadius: 999,
    height: '8@ms',
    width: '8@ms',
  },
});
