import { AxiosStatic } from 'axios';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

export const thisIsAModule = true;

declare global {
  var CLR_APP: string;
  var CLR_APP_BG: string;
  var axios: AxiosStatic;

  type Timer = ReturnType<typeof setTimeout>;

  type Field<Form, Key> = ControllerRenderProps<Form, Key>;

  type FieldState = ControllerFieldState;

  type FileAPI = {
    Assign: string;
    AssignID: string;
    File: string;
    ID: string;
    Path: string;
  };

  type valueof<T> = T[keyof T];

  type pairsArr<T> = {
    [PropertyName in keyof T]: undefined extends T[PropertyName]
      ? [PropertyName] | [PropertyName, T[PropertyName]]
      : [PropertyName, T[PropertyName]];
  }[keyof T];

  type pairsObj<T> = {
    [PropertyName in keyof T]: undefined extends T[PropertyName]
      ? { name: PropertyName; value?: T[PropertyName] }
      : { name: PropertyName; value: T[PropertyName] };
  }[keyof T];

  type FileBlob = { uri: string; name: string; type: string };

  type ReturnObj<T> = {
    [Name in keyof T]: T[Name] extends (...args: any) => any ? ReturnType<T[Name]> : T[Name];
  };

  type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
  };

  type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];

  type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

  type AwaitedReturn<T> = Awaited<ReturnType<T>>;
}

/**
 * Useful links:
 * use global vars with TS - https://stackoverflow.com/questions/68481686/type-typeof-globalthis-has-no-index-signature
 * pairsArr, pairsObj      - https://stackoverflow.com/questions/66524258/how-can-i-write-a-react-component-that-has-dependent-props-in-typescript
 * PickByType              - https://stackoverflow.com/questions/46583883/typescript-pick-properties-with-a-defined-type
 * ReturnObj               - https://stackoverflow.com/questions/67396569/type-rp-does-not-satisfy-the-constraint-args-any-any
 * RequireOnlyOne/LeastOne - https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
 * no index signature err  - https://stackoverflow.com/questions/64195920/typescript-error-accessing-globalthis-property
 * other                   - https://stackoverflow.com/questions/69163894/typescript-check-it-type-includes-undefined
 * playground with extends - https://www.typescriptlang.org/play?ssl=3&ssc=45&pln=1&pc=1#code/C4TwDgpgBAhlC8UCuA7AJhAZgSxRNUAPlCkgDZkDcAsAFCiRQBGCy6Wu+UEAHsBOgDOsKAH4owAE5JoALiiYYZQRBr1w0AMas4vfkLYYceAuKkyo8xctVA
 **/
