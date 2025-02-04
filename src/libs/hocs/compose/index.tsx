import { FC } from 'react';
import { Open, withOpen } from '../with-open';
import { Translate, withT } from '../with-translate';

export const withOpenTranslate = <Props,>(WP: FC<Props & Open & Translate>) => {
  return withOpen<Props>(withT<Props & Open>(WP));
};

export const withOT = withOpenTranslate;

/**
 * Useful links:
 * https://stackoverflow.com/questions/54355096/how-to-use-hoc-with-redux-compose-and-typescript
 */
