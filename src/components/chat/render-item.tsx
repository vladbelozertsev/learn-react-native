import React from 'react';
import { ListRenderItem } from 'react-native';
import { Message } from './utils';
import { RenderItemChatMsg } from './render-item-chat-msg';

type ListItem = ListRenderItem<Message>;
type Prams1 = {
  userId: string | number;
  systemId?: string | number;
  last?: number;
};

export const renderItem = (prams1: Prams1): ListItem => {
  return prams2 => {
    const { item, index } = prams2;
    const key = prams2.index.toString();
    const isLast = prams1.last ? prams1.last - 1 === index : undefined;
    return <RenderItemChatMsg key={key} isLast={isLast} msg={item} {...prams1} />;
  };
};
