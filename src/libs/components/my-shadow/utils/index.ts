import { StyleSheet, View } from 'react-native';

export const getBorderRadius = (item?: View['props']) => {
  if (!item) return;
  const style = StyleSheet.flatten(item.style);
  return {
    borderTopLeftRadius: style?.borderTopLeftRadius,
    borderTopRightRadius: style?.borderTopRightRadius,
    borderBottomLeftRadius: style?.borderBottomLeftRadius,
    borderBottomRightRadius: style?.borderBottomRightRadius,
    borderRadius: style?.borderRadius,
  };
};
