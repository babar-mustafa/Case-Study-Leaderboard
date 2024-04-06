/* eslint-disable camelcase */

type isTypeObject = Record<
  string,
  isTypeNumber,
  isTypeString,
  isTypeFunction,
  isTypeUndefined,
  isTypeBoolen
>;
type isTypeFunction = (value: isTypeNumber) => void;
type isTypeUndefined = undefined;
type isTypeString = string;
type isTypeNumber = number;
type isTypeArray = Array<string>;
type isTypeNull = null;

type allAnyTypes =
  | isTypeObject
  | isTypeFunction
  | isTypeUndefined
  | isTypeString
  | isTypeNumber
  | isTypeArray
  | isTypeNull;

interface IAction {
  type: string;
  payload?: allAnyTypes;
}

type TReduxState = import('store/index').ReduxState;
type IDispatch = allAnyTypes;

interface ISearchBar {
  placeholder?: string;
  onPressSearch?: () => void;
  onInputSearch?: (input: string) => void;
}

interface IText {
  color?: string;
  size?: number;
  children?: any;
}

interface DataUserList {
  [key: string]: DataUserType;
}

interface DataUserType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank: number;
}

interface IListItem {
  item?: DataUserType;
  rank?: allAnyTypes;
  isSearchedUser?: allAnyTypes;
}

interface ModalProps {
  visible?: boolean;
  message?: string;
  onClose?: () => void;
}

interface ISort {
  isSorted?: boolean;
}
