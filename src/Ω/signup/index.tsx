import React, { useState } from 'react';
import { Screen } from 'src/libs/types/screens';
import { ScreenView } from 'src/libs/components/screen';
import { Input2 } from 'src/libs/components/input';
import { Button1, Button2 } from 'src/libs/components/button';
import { useSignup } from './api';

export const Signup: Screen<'Signup'> = () => {
  const { signup, data } = useSignup();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    // const input = { email, name, password };
    // signup({ variables: { input } });
  };

  return (
    <ScreenView>
      <Input2 value={email} onChangeText={setEmail} $ph="email" $mb />
      <Input2 value={name} onChangeText={setName} $ph="name" $mb />
      <Input2 value={password} onChangeText={setPassword} $ph="password" $mb />
      <Button1 $v="Send" onPress={onPress} />
    </ScreenView>
  );
};
