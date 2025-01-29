import { PickerItem } from 'src/components/picker';

type Picker = {
  getSelected: {
    item: (items: PickerItem[]) => PickerItem | undefined;
    items: (items: PickerItem[]) => PickerItem[];
    id: (items: PickerItem[]) => string;
    ids: (items: PickerItem[]) => string[];
    value: (items: PickerItem[]) => string;
    values: (items: PickerItem[]) => string[];
  };

  setSelected: (prams: {
    items: PickerItem[];
    id: string;
    multi?: boolean;
    cancel?: boolean;
  }) => PickerItem[];

  createItems: (prams: {
    arr: any[];
    getId: ((item: any) => string) | string;
    value: string;
    subItems?: string;
    selectedId?: string;
    selectedIds?: string[];
  }) => PickerItem[];
};

export const picker: Picker = {
  getSelected: {
    item: items => items.find(item => item.selected),
    items: items => items.filter(item => item.selected),
    id: items => items.find(item => item.selected)?.id || '',
    ids: items => items.filter(item => item.selected).map(item => item.id),
    value: items => items.find(item => item.selected)?.value || '',
    values: items => items.filter(item => item.selected)?.map(item => item.value),
  },

  setSelected: prams => {
    if (prams.multi) {
      return prams.items.map(item => {
        if (item.id !== prams.id) return item;
        return { ...item, selected: !item.selected };
      });
    }
    return prams.items.map(item => {
      const selected = item.id === prams.id;
      return { ...item, selected };
    });
  },

  createItems: prams => {
    const { arr, getId, value, subItems, selectedId, selectedIds } = prams;
    const headerBasic = subItems ? 1 : undefined;
    const wrap = (header?: number) => {
      const plusOne = header && header + 1;
      return (item: any) => {
        const id: string = typeof getId === 'function' ? getId(item) : item[getId];
        const selected = selectedIds ? selectedIds.includes(id) : id === selectedId;
        return [
          { id, value: String(item[value]), selected, header },
          ...((subItems && item[subItems]?.map(wrap(plusOne))) || []),
        ];
      };
    };
    return arr.map(wrap(headerBasic)).flat(Infinity);
  },
};
