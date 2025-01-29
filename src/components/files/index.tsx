import React, { FC } from 'react';
import { ButtonShow } from '../button';
import { Item } from './item';
import { withOpen } from 'src/hocs/with-open';

type Props = {
  mb?: boolean;
  Files: {
    File: string;
    Name: string;
    Path: string;
    Type: string;
  }[];
};

export const Files: FC<Props> = withOpen(props => {
  return (
    <ButtonShow
      {...props}
      t="Files"
      icon="files-o"
      mb={props.mb}
      disabled={!props.Files.length}
      content={props.Files.map((file, i) => {
        const isLast = props.Files.length - 1 === i;
        return <Item {...file} key={i} isLast={isLast} />;
      })}
    />
  );
});

