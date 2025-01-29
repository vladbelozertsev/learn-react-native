import React, { useEffect, useState, FC } from 'react';
import { Close } from './close';
import { HeaderPicker } from './header-picker';
import { Line } from './line';
import { ListEmpty } from './list-empty';
import { ListFooter } from './list-footer';
import { Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList, View } from 'react-native';
import { PickerItem } from './types';
import { ScaledSheet, vs } from 'react-native-size-matters';
import { renderPickerItem } from './render-picker-item';

type Props = {
  checkIcon?: boolean;
  isLoading?: boolean;
  items: PickerItem[];
  notClose?: boolean;
  open: boolean;
  search?: boolean;
  showCloseButton?: boolean;
  width?: boolean;
  hide: () => void;
  onEndReached?: FlatList['props']['onEndReached'];
  onSelect: (id: string) => void;
  getNextPage?: {
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
  };
};

export const Picker: FC<Props> = props => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(props.items);
  const minWidth = props.width ? '100%' : undefined;
  const size = props.showCloseButton ? 25 : 50;
  const paddingTop = vs(size);

  const renderItem = renderPickerItem({
    checkIcon: props.checkIcon,
    onSelect: (id: string) => {
      if (!props.notClose) props.hide();
      props.onSelect(id);
    },
  });

  const onEndReached: Props['onEndReached'] = info => {
    if (props.onEndReached) props.onEndReached(info);
    if (props.getNextPage) {
      const hasNext = props.getNextPage.hasNextPage;
      const isFetchNext = props.getNextPage.isFetchingNextPage;
      if (hasNext && !isFetchNext) props.getNextPage.fetchNextPage();
    }
  };

  useEffect(() => {
    if (!search) setItems(props.items);
    const filteredItems = props.items.filter(item => {
      const string = item.value.toLowerCase();
      const word = search.toLowerCase();
      return string.search(word) !== -1;
    });
    setItems(filteredItems);
  }, [props.items, search]);

  return (
    <Modal animationType="fade" transparent={true} visible={props.open} onRequestClose={props.hide}>
      <TouchableOpacity activeOpacity={1} onPressOut={props.hide} style={[styles.wrapBtn, { paddingTop }]}>
        <TouchableWithoutFeedback>
          <View>
            <Close close={props.hide} hide={!props.showCloseButton} />
            <HeaderPicker setSearch={setSearch} hide={!props.search} />
            <FlatList
              ItemSeparatorComponent={Line}
              ListEmptyComponent={<ListEmpty />}
              ListFooterComponent={<ListFooter {...props} />}
              data={items}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.5}
              renderItem={renderItem}
              style={[styles.flatList, { minWidth }]}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  wrapBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.55)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '50@ms',
    paddingBottom: '50@vs',
  },
  flatList: {
    backgroundColor: '#FFF',
    flexGrow: 0,
    height: 'auto',
  },
});
