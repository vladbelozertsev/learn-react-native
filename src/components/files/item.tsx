import AntDesign from 'react-native-vector-icons/AntDesign';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Alert, Image } from 'react-native';
import { Loading } from 'src/components/loading';
import { MyShadow } from '../my-shadow';
import { MyText } from '../my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { URLS } from 'src/utils/env';
import { useDownload } from 'src/hooks/use-download';
import { withT } from 'src/hocs/with-translate';

type Props = {
  File: string;
  Name: string;
  Path: string;
  Type: string;
  isLast?: boolean;
};

export const Item = withT<Props>(props => {
  const { File, Type, Path, isLast, t } = props;
  const { isLoading, download } = useDownload();
  const imageTypes = ['png', 'svg', 'jpg', 'jpeg'];
  const isImage = imageTypes.includes(Type);
  const styles = getStyles(isLast);

  const onPress = () => {
    const onFail = () => Alert.alert(t('Failed to upload file'));
    const uri = `${URLS.FILE}/${props.Path}/${props.File}`;
    download({ fileName: props.File, fetch: ['GET', uri], onFail });
  };

  return (
    <MyShadow
      style={styles.shadow}
      $innerTO={{ onPress, disabled: isLoading, style: { flexDirection: 'row', alignItems: 'center' } }}
      sides={{ start: true, end: true, bottom: !!isLast, top: false }}
      corners={{ bottomEnd: !!isLast, bottomStart: !!isLast, topEnd: false, topStart: false }}>
      {!isImage && <AntDesign size={ms(30)} color={CLR_APP} name="file1" />}
      {isImage && <Image style={styles.img} source={{ uri: `${URLS.FILE}/${Path}/${File}` }} />}
      <MyText $v={File} $fs="14" $ml="20" $mr="20" $center $f1 />
      {!isLoading && <MCI size={ms(24)} color={CLR_APP} name="download" />}
      {isLoading && <Loading />}
    </MyShadow>
  );
});

const getStyles = (isLast?: boolean) => {
  return ScaledSheet.create({
    shadow: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: '20@ms',
      paddingVertical: '5@ms',
      borderBottomLeftRadius: isLast ? 30 : 0,
      borderBottomRightRadius: isLast ? 30 : 0,
    },
    fileIcon: {
      color: CLR_APP,
      fontSize: '24@ms',
      marginRight: '8@ms',
    },
    img: {
      width: '50@ms',
      height: '50@ms',
    },
  });
};
