import { Text, TextStyle } from 'react-native';

/**
 * @param $t string that needs to translate
 * @param $v string value without translation
 * @param $h header text
 * @param $m (mt, mb, ml, mr, mh, mv) margins
 * @param $lower transform text to lower-case
 * @param $upper transform text to upper-case
 * @param $capit uppercase first letter (capitalize)
 * @param $left text align left
 * @param $right text align right
 * @param $center text align center
 * @param $f flex value
 * @param $f1 flex with value = 1
 * @param $lh line height
 * @param $ta text align
 * @param $tav text align vertical
 * @param $underl text decoration underline
 **/

export type MyTextProps = Text['props'] & TextExtraProps;
export type TextExtraProps = {
  $h?: number | string;
  $beg?: string;
  $bg?: TextStyle['backgroundColor'];
  $bold?: boolean;
  $c?: TextStyle['color'];
  $center?: boolean;
  $children?: React.ReactNode;
  $cp?: boolean;
  $end?: string;
  $f1?: boolean;
  $f?: TextStyle['flex'];
  $fs?: TextStyle['fontSize'] | string;
  $fw?: TextStyle['fontWeight'];
  $left?: boolean;
  $lh?: TextStyle['lineHeight'] | string;
  $mb?: TextStyle['marginBottom'] | string;
  $mh?: TextStyle['marginHorizontal'] | string;
  $ml?: TextStyle['marginLeft'] | string;
  $mr?: TextStyle['marginRight'] | string;
  $mt?: TextStyle['marginTop'] | string;
  $mv?: TextStyle['marginVertical'] | string;
  $m?: TextStyle['margin'] | string;
  $right?: boolean;
  $t?: string | number | null;
  $ta?: TextStyle['textAlign'];
  $upper?: boolean;
  $lower?: boolean;
  $capit?: boolean;
  $tav?: TextStyle['textAlignVertical'];
  $v?: string | number | null;
  $underl?: boolean;
  $hide?: boolean;
  $edit?: (text: string) => string;
};
