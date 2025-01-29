import Modal from 'react-native-modal';
import React, { useEffect } from 'react';
import { AddMarkingsItems } from './add-markings-items';
import { Append, Fields, Replace } from './types';
import { Button2 } from 'src/components/button';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { UseFieldArrayRemove } from 'react-hook-form';
import { View, ScrollView } from 'react-native';
import { withOpen } from 'src/hocs/with-open';
import { useHasChanged } from 'src/hooks/use-helpers';

type Props = {
  append: Append;
  cityFrom: string;
  err?: boolean;
  fields: Fields;
  remove: UseFieldArrayRemove;
  replace: Replace;
};

export const AddMarkings = withOpen<Props>(props => {
  const { open: isVisible, show, hide, replace, cityFrom } = props;
  const shd = { $outerView: { style: styles.ov }, startColor: '#DFE0E6' };
  const modal = { isVisible, onBackButtonPress: hide, onBackdropPress: hide };
  const cityHasChanged = useHasChanged(cityFrom, true);

  useEffect(() => {
    if (cityHasChanged) replace([]);
  }, [cityHasChanged, replace]);

  return !props.cityFrom ? null : (
    <View>
      <Button2 onPress={show} $t="Add marking" $shadow={shd} $error={props.err} />
      <Modal style={styles.modal} {...modal}>
        <ScrollView style={styles.scrollView}>
          <MyText $t="Select marking(s)" $end=": " $h="16" $mb="10" />
          <AddMarkingsItems {...props} />
        </ScrollView>
      </Modal>
    </View>
  );
});

const styles = ScaledSheet.create({
  ov: {
    alignSelf: 'flex-end',
    marginBottom: '30@ms',
  },
  modal: {
    backgroundColor: '#FFF',
    borderRadius: '30@ms',
    marginVertical: '50%',
    paddingHorizontal: '16@ms',
    paddingVertical: '20@ms',
    marginHorizontal: '30@ms',
  },
  scrollView: {
    backgroundColor: '#FFF',
    borderRadius: '30@ms',
  },
});
