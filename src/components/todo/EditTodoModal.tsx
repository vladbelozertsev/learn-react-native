import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, TextInput, Alert } from 'react-native';
import { globalStyles } from '../_styles/globalStyles';

interface Props {
  editTitle: (title: string) => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string | undefined;
}

export const EditTodoModal = (props: Props) => {
  const [newTitle, setNewTitle] = useState(props.title || '');

  const handleCancel = () => {
    props.setModalVisible(false);
  };

  const handleSave = () => {
    if (!newTitle.trim()) {
      Alert.alert('Ошибка!', 'Название дела не может быть пустым!');
      return;
    }
    props.editTitle(newTitle);
    props.setModalVisible(false);
  };

  return (
    <Modal visible={props.modalVisible} transparent={true} animationType="none">
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <TextInput
            style={{ ...globalStyles.inp, ...styles.inp }}
            defaultValue={props.title}
            onChangeText={setNewTitle}
          />
          <View style={styles.btnsContainerView}>
            <View style={styles.btnView}>
              <Button title={'Отмена'} onPress={handleCancel} />
            </View>
            <View style={styles.btnView}>
              <Button title={'Сохранить'} onPress={handleSave} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  modalContent: {
    minHeight: '50%',
    width: '100%',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  inp: {
    width: '100%',
    marginBottom: 30,
  },
  btnsContainerView: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  btnView: {
    width: '45%',
  },
});
