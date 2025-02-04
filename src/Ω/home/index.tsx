import React from 'react';
import { MyText } from 'src/libs/components/my-text';
import { Screen } from 'src/libs/types/screens';
import { ScreenView } from 'src/libs/components/screen';
import { TouchableOpacity } from 'react-native';

export const Home: Screen<'Home'> = props => {
  const nav = props.navigation.navigate;
  const goCarList = () => nav('CarList');
  const goCarCreate = () => nav('CarCreate');

  return (
    <ScreenView>
      <TouchableOpacity>
        <MyText $v="Cars List" onPress={goCarList} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MyText $v="Add Car" onPress={goCarCreate} />
      </TouchableOpacity>
    </ScreenView>
  );
};
