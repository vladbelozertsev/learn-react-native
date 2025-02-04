import { ObservableQueryFields } from '@apollo/client';

export type FetchMore<InputType = void, Variables = void> = ObservableQueryFields<
  InputType extends void ? any : InputType,
  Variables extends void ? any : Variables
>['fetchMore'];
