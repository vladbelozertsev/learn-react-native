import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { FC } from 'react';
import { Message, MSG_TYPES_VALUES } from './utils';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity, View, Alert } from 'react-native';
import { useDownload } from 'src/libs/hooks/use-download';
import { useTranslation } from 'react-i18next';

type Props = {
  msgType: MSG_TYPES_VALUES;
  files?: Message['files'];
};

export const RenderItemChatMsgFiles: FC<Props> = props => {
  const { isLoading, download } = useDownload();
  const { t } = useTranslation();
  const styles = getStyles(props.msgType);

  if (!props.files?.length) return null;

  return (
    <View style={styles.rootView}>
      {props.files.map((file, i) => {
        const onFail = () => Alert.alert(t('Failed to upload file'));
        const onPress = () => download({ fileName: file.name, fetch: ['GET', file.uri], onFail });
        return (
          <TouchableOpacity style={styles.btn} key={i} onPress={onPress} disabled={isLoading}>
            <FontAwesome5 style={styles.icon} name="file-download" />
            <MyText style={styles.text} $v={file.name || ''} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getStyles = (msgType: MSG_TYPES_VALUES) => {
  return ScaledSheet.create({
    rootView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: '5@ms',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100@ms',
    },
    image: {
      width: '50@ms',
      height: '50@ms',
      resizeMode: 'cover',
      marginBottom: '10@ms',
      marginRight: '10@ms',
    },
    icon: {
      fontSize: '50@ms',
      color: msgType === 'USER' ? '#FFF' : CLR_APP,
    },
    text: {
      color: msgType === 'USER' ? '#FFF' : CLR_APP,
      fontSize: '12@ms',
      marginTop: '5@ms',
      flex: 1,
    },
  });
};
