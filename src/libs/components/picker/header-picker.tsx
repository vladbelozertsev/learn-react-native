import React, { useState, Dispatch, SetStateAction, FC } from 'react';
import { Input0 } from 'src/libs/components/input';
import { ScaledSheet } from 'react-native-size-matters';
import { useDebounce } from 'src/libs/hooks/use-debounce';
import { useTranslation } from 'react-i18next';

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  hide?: boolean;
};

export const HeaderPicker: FC<Props> = props => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  useDebounce(() => {
    props.setSearch(value);
  }, [1000, value]);

  return props.hide ? null : (
    <Input0
      style={[styles.searchInp]}
      placeholder={t('Enter text to search') || ''}
      placeholderTextColor={'#A9A9A9'}
      onChangeText={setValue}
      value={value}
    />
  );
};

const styles = ScaledSheet.create({
  searchInp: {
    backgroundColor: '#FFF',
    fontSize: '16@ms',
    paddingLeft: '25@ms',
    paddingRight: '25@ms',
    paddingVertical: '10@ms',
    minWidth: '100%',
    color: '#242424',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
});
