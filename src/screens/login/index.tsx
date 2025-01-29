import * as yup from 'yup';
import React, { FC } from 'react';
import { Input3 } from 'src/components/input';
import { LoginForm, useLogin } from 'src/api/auth';
import { RootDrawerScreenProps } from 'src/types/screens';
import { ScaledSheet } from 'react-native-size-matters';
import { ScreenView } from 'src/components/screen';
import { SubmitBtn } from './submit-btn';
import { TopImg } from './top-img';
// import { USERS } from 'src/utils/env';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = RootDrawerScreenProps<'Login'>;

export const LoginScreen: FC<Props> = () => {
  const { mutate, isPending } = useLogin();

  const schema: yup.ObjectSchema<LoginForm> = yup.object({
    Email: yup.string().required(),
    Password: yup.string().required(),
  });

  const form = useForm<LoginForm>({
    resolver: yupResolver(schema),
    // defaultValues: USERS.osp308,
  });

  const submit = form.handleSubmit(data => {
    mutate(data, { onSuccess: () => form.reset });
  });

  return (
    <ScreenView contentContainerStyle={styles.content} $includeInsetTop>
      <TopImg />
      <View style={styles.inpsView}>
        <Controller
          name="Email"
          control={form.control}
          render={rhf => <Input3 $rhf={rhf} $t="E-mail" $mb />}
        />
        <Controller
          name="Password"
          control={form.control}
          render={rhf => <Input3 $rhf={rhf} $t="Password" $mb $securetgl />}
        />
      </View>
      <SubmitBtn onPress={submit} isLoading={isPending} />
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  content: {
    paddingHorizontal: 0,
  },
  inpsView: {
    paddingHorizontal: '15@ms',
    marginBottom: '20@vs',
  },
});
