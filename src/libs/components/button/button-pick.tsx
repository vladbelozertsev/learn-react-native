import * as RHF from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, { FC } from 'react';
import { Loading } from '../loading';
import { MyShadow } from 'src/libs/components/my-shadow';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { TouchableOpacity, View } from 'react-native';
import { withTranslate } from 'src/libs/hocs/with-translate';

type Props = {
  $colon?: boolean;
  $isError?: boolean;
  $isLoading?: boolean;
  $mb?: boolean;
  $ph?: string;
  $pht?: string;
  $removeable?: { id: string; title: string; onPress: (id?: string) => void }[];
  $rhf?: { field?: RHF.ControllerRenderProps<any, any>; fieldState?: RHF.ControllerFieldState };
  $rqd?: boolean;
  $t?: string;
  $topT?: string;
  $topV?: string;
  $v?: string;
  $onPress: () => void;
  $onErase?: () => void;
};

export const ButtonPick = withTranslate<Props>(props => {
  const title = props.$v || (props.$t && props.t(props.$t));
  const ph = props.$ph || (props.$pht && props.t(props.$pht));
  const marginBottom = props.$mb ? ms(30) : 0;
  const textColor = ph && !title ? '#AAA' : '#242424';
  const iconColor = ph && !title ? '#CCC' : CLR_APP;
  const borderTopRightRadius = props.$onErase ? 0 : ms(15);
  const borderBottomRightRadius = props.$onErase ? 0 : ms(15);
  const radius = { borderTopRightRadius, borderBottomRightRadius };
  const rhfErrMsg = props.$rhf?.fieldState?.error?.message;
  const end = `${props.$colon ? ':' : ''}${props.$rqd ? '*' : ''}`;
  const isTop = !!props.$topT || !!props.$topV;

  return (
    <View style={{ marginBottom }}>
      {isTop && <MyText $t={props.$topT} $v={props.$topV} $end={end} $ml="10" $mb="2" $bold />}
      <MyShadow style={styles.rootView} containerStyle={styles.outerView}>
        <View style={[styles.btnView, radius]}>
          <TouchableOpacity style={styles.searchBtn} onPress={props.$onPress}>
            {props.$isLoading && <Loading color={textColor} />}
            {!props.$isLoading && <FontAwesome name="caret-down" color={textColor} size={ms(15)} />}
            {!props.$removeable && <MyText $v={title || ph} $c={textColor} $fs={16} $ml="5" />}
            {!!props.$removeable && <Removeable items={props.$removeable} />}
          </TouchableOpacity>
        </View>
        {props.$onErase && (
          <View style={styles.eraseView}>
            <TouchableOpacity onPress={props.$onErase}>
              <Fontisto name="close-a" size={ms(22)} color={iconColor} />
            </TouchableOpacity>
          </View>
        )}
      </MyShadow>
      {!!rhfErrMsg && <MyText $v={rhfErrMsg} $c="#F00" $ml="10" $mt="2" $bold />}
    </View>
  );
});

const Removeable: FC<{ items: Props['$removeable'] }> = props => {
  return (
    <View style={styles.removeableView}>
      {props.items?.map(item => {
        return (
          <View style={styles.removeableViewItem} key={item.id}>
            <MyText $v={item.title} $end=" " $c="#242424" $fs={16} $ml="5" />
            <TouchableOpacity onPress={() => item.onPress(item.id)}>
              <Fontisto name="close-a" color={CLR_APP} size={ms(16)} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = ScaledSheet.create({
  outerView: {
    flex: 1,
  },
  rootView: {
    flexDirection: 'row',
    borderRadius: '15@ms',
  },
  removeableView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  removeableViewItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnView: {
    backgroundColor: '#FFF',
    borderRadius: '15@ms',
    borderRightWidth: 0,
    flex: 1,
    minHeight: '50@ms',
    paddingVertical: '7@ms',
  },
  searchBtn: {
    flex: 1,
    paddingLeft: '10@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eraseView: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomRightRadius: '16@ms',
    borderLeftWidth: 0,
    borderTopRightRadius: '16@ms',
    height: '100%',
    justifyContent: 'center',
    width: '45@ms',
  },
});
