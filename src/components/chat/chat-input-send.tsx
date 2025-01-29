import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import { AddFileModal } from 'src/components/add-file-modal';
import { ChatProps } from '.';
import { Input0 } from 'src/components/input';
import { Loading } from 'src/components/loading';
import { MyShadow } from 'src/components/my-shadow';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { withOpen } from 'src/hocs/with-open';

export const ChatInputSend = withOpen<ChatProps['input']>(props => {
  const { msg, setMsg, onPress, disabled, isLoading, msgsIsLoading } = props;
  const docs = props.addFile?.docs?.length || 0;
  const imgs = props.addFile?.assets?.length || 0;
  const translate = useTranslation().t;

  const openAddFileModal = () => {
    if (props.addFile) props.show();
  };

  return (
    <MyShadow
      style={styles.shadow}
      sides={{ start: true, end: true, bottom: false, top: false }}
      corners={{ bottomEnd: true, bottomStart: true, topEnd: false, topStart: false }}>
      {msgsIsLoading && <Loading mb={20} />}
      <View style={styles.msgView}>
        <Input0
          style={styles.msgInp}
          placeholder={translate('Enter your message')!}
          value={msg}
          onChangeText={setMsg}
        />
        {!!props.addFile && (
          <TouchableOpacity style={styles.filesBtn} onPress={openAddFileModal}>
            <Fontisto style={styles.filesIcon} name="paperclip" />
            {!!(docs + imgs) && <MyText style={styles.filesText} $v={docs + imgs} />}
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.submitBtn} onPress={onPress} disabled={isLoading || disabled}>
          {isLoading && <Loading styleIndicator={styles.indicator} size={ms(28)} color="#FFF" />}
          {!isLoading && <FontAwesome name="send" style={styles.submitIcon} />}
        </TouchableOpacity>
        {!!props.addFile && <AddFileModal {...props.addFile} {...props} />}
      </View>
    </MyShadow>
  );
});

const styles = ScaledSheet.create({
  shadow: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20@ms',
    marginBottom: -2,
  },
  msgView: {
    flexDirection: 'row',
  },
  msgInp: {
    color: '#242424',
    flex: 1,
    fontSize: '16@ms',
    height: '45@ms',
    paddingLeft: '10@ms',
    paddingRight: '32@ms',
    borderColor: CLR_APP,
    borderWidth: 2,
    borderRightWidth: 0,
    backgroundColor: '#FFF',
  },
  filesBtn: {
    right: '45@ms',
    position: 'absolute',
    height: '45@ms',
    width: '32@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filesIcon: {
    fontSize: '24@ms',
    color: CLR_APP,
  },
  filesText: {
    borderRadius: 3,
    backgroundColor: CLR_APP,
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: '5@ms',
    fontSize: '10@ms',
    marginTop: '-10@ms',
    minWidth: '24@ms',
    textAlign: 'center',
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: CLR_APP,
    height: '45@ms',
    justifyContent: 'center',
    width: '45@ms',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  submitIcon: {
    fontSize: '22@ms',
    color: '#FFF',
  },
  indicator: {
    height: '45@ms',
    width: '45@ms',
  },
});
