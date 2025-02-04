import { AddBookingForm, AddBookingMaskForm } from 'api/bookings';

export type Fields =
  | RHF.FieldArrayWithId<AddBookingForm, 'params', 'id'>[]
  | RHF.FieldArrayWithId<AddBookingMaskForm, 'params', 'id'>[];

export type Replace =
  | RHF.UseFieldArrayReplace<AddBookingForm, 'params'>
  | RHF.UseFieldArrayReplace<AddBookingMaskForm, 'params'>;

export type Append =
  | RHF.UseFieldArrayAppend<AddBookingForm, 'params'>
  | RHF.UseFieldArrayAppend<AddBookingMaskForm, 'params'>;
