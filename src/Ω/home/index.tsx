import React, { useState } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { Screen } from 'src/libs/types/screens';
import { ScreenView } from 'src/libs/components/screen';
import { TouchableOpacity } from 'react-native';
import { withOpen } from 'src/libs/hocs/with-open';
import { AddFileModal } from 'src/libs/components/add-file-modal';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { useAddImg } from './api/send-img';
import { RNFile } from 'src/libs/utils/helpers';
import { useAddImgs } from './api/send-imgs';

export const Home: Screen<'Home'> = withOpen(props => {
  const [imgs, setImgs] = useState<DocumentPickerResponse[]>([]);
  const nav = props.navigation.navigate;
  const goSignup = () => nav('Signup');
  const goCarList = () => nav('CarList');
  const goCarCreate = () => nav('CarCreate');

  const addImg = useAddImg();
  const addImgs = useAddImgs();

  const sendImage = () => {
    console.log('onPress');

    const file = new RNFile({
      uri: imgs[0].uri,
      name: imgs[0].name || '',
      type: imgs[0].type || '',
    });

    addImg.sendImage({
      variables: { input: { file } },
      onCompleted(data, clientOptions) {
        console.log(data);
        console.log(clientOptions);
      },
      onError: err => {
        console.log(JSON.stringify(err, null, 2));
        console.error(err);
      },
    });
  };

  const sendImages = () => {
    console.log('onPress');

    const files = imgs.map(img => {
      return new RNFile({
        uri: img.uri,
        name: img.name || '',
        type: img.type || '',
      });
    });

    addImgs.sendImage({
      variables: { input: { files } },
      onCompleted(data, clientOptions) {
        console.log(data);
        console.log(clientOptions);
      },
      onError: err => {
        console.log(JSON.stringify(err, null, 2));
        console.error(err);
      },
    });
  };

  console.log(imgs);

  return (
    <ScreenView>
      <TouchableOpacity>
        <MyText $v="Рег" onPress={goSignup} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MyText $v="Cars List" onPress={goCarList} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MyText $v="Add Car" onPress={goCarCreate} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MyText $v="Get Image" onPress={props.show} />
      </TouchableOpacity>
      <TouchableOpacity onPress={sendImage}>
        <MyText $v="Sfdfdf" />
      </TouchableOpacity>
      <TouchableOpacity onPress={sendImages}>
        <MyText $v="Sfdfdfsasas" />
      </TouchableOpacity>
      <AddFileModal {...props} selectDocs={{ callback: setImgs }} />
    </ScreenView>
  );
});
