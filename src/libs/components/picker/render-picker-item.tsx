import React from 'react';
import { ListRenderItem } from 'react-native';
import { PickerItem } from './types';
import { RenderPickerItemComp as Item } from './render-picker-item-comp';

type RenderPickerItem = (prams: {
  onSelect: (id: string) => void;
  checkIcon?: boolean;
}) => ListRenderItem<PickerItem>;

export const renderPickerItem: RenderPickerItem = prams => {
  return value => {
    const { item } = value;
    return <Item key={item.id} item={item} {...prams} />;
  };
};
