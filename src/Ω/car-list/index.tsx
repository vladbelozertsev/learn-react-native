import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { Screen } from 'src/libs/types/screens';
import { ScreenList } from 'src/libs/components/screen';
import { TouchableOpacity } from 'react-native';
import { useGetCars } from './api';
import { useGo } from 'src/libs/hooks/use-navigation';

let i = 0;

export const CarList: Screen<'CarList'> = () => {
  const query = useGetCars({ take: 5 });

  return (
    <ScreenList
      $fetchMore={query.fetchMore}
      $loading={query.loading}
      $refetch={query.refetch}
      data={query.data?.cars}
      renderItem={Item}
    />
  );
};

const Item: FC<{ item: { id: number; brand: string }; index: number }> = ({ item }) => {
  const goCar = useGo('CarItem', { id: item.id });
  i += 1;
  console.log(i);
  return (
    <TouchableOpacity key={item.id} onPress={goCar} style={styles.itemBtn}>
      <MyText $v={`${item.id} ${item.brand}`} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  itemBtn: {
    backgroundColor: 'yellow',
    height: 200,
    marginBottom: 30,
  },
});
